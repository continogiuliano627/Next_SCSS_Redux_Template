import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: [
			"xsgames.co",
			"s3-alpha-sig.figma.com",
			"picsum.photos",
			...(process.env.NEXT_PUBLIC_API ? [new URL(process.env.NEXT_PUBLIC_API).hostname] : [])
		]
	},
	env: {
		NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API
	}
};

// Configuration object tells the next-pwa plugin
/* const withPWA = require("next-pwa")({
	dest: "public", // Destination directory for the PWA files
	register: true, // Register the PWA service worker
	skipWaiting: true, // Skip waiting for service worker activation
	sw: "/sw.js"
}); */

export default nextConfig;
