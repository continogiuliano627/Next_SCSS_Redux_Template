type EventStatus = 'SUCCESS' | 'ERROR' | 'OTHER'

export interface EventPayload {
	status: EventStatus
	message: string
	data: any
}

type EventCallback = (payload: EventPayload) => void

class EventHandler {
	private events: Map<string, Set<EventCallback>> = new Map()

	// Suscribirse a un evento
	listen(event: string, callback: EventCallback): void {
		if (!this.events.has(event)) {
			this.events.set(event, new Set())
		}
		const callbacks = this.events.get(event)!

		if (!callbacks.has(callback)) {
			callbacks.add(callback)
		} else {
			console.warn(`Callback ya registrado para el evento: ${event}`)
		}
	}

	// Eliminar una suscripción
	remove(event: string, callback: EventCallback): void {
		this.events.get(event)?.delete(callback)
		if (this.events.get(event)?.size === 0) {
			this.events.delete(event)
		}
	}

	// Emitir un evento
	add(event: string, payload: EventPayload): void {
		this.events.get(event)?.forEach((callback) => callback(payload))
	}
}

// Exportar una instancia única
export const eventHandler = new EventHandler()
