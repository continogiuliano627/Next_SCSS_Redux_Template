"use client";
import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { decrement, increment, setValue } from "@/store/Slices/exampleSlice";
const Home = () => {
	const value = useSelector((state: RootState) => state.example.value);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className={styles.page}>
			<main className={styles.main}>NextJS Scss Redux Axios Template</main>
			<div className={styles.redux_test}>
				<p>Value: {value}</p>
				<button onClick={() => dispatch(increment())}>+1</button>
				<button onClick={() => dispatch(decrement())}>-1</button>
				<button onClick={() => dispatch(setValue(5))}>Set 5</button>
			</div>
		</div>
	);
};

export default Home;
