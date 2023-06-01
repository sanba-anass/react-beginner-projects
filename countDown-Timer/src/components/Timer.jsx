import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
	const [days, setDays] = useState(1);
	const [hours, setHours] = useState(1);
	const [minutes, setMinutes] = useState(10);
	const [seconds, setSeconds] = useState(50);
	const timestamp = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	const isDone = days === 0 && hours === 0 && minutes === 0 && seconds === 0;
	useEffect(() => {
		const timer = setInterval(() => {
			if (days === 0 && hours === 0 && minutes === 0) {
				if (seconds === 0) {
					return;
				}
				setSeconds((seconds) => seconds - 1);

				return;
			}
			setSeconds((seconds) => seconds - 1);

			if (seconds === 0) {
				setSeconds(59);

				setMinutes((minutes) => minutes - 1);
				return;
			}

			if (minutes === 0 && seconds === 59) {
				if (hours === 0 && minutes === 0) {
					return;
				}
				setMinutes(59);
				if (hours === 0) {
					return;
				}
				setHours((hours) => hours - 1);

				return;
			}

			if (hours === 0) {
				if (days === 0) {
					return;
				}
				setHours(23);

				setDays((days) => days - 1);
			}
		}, 500);

		return () => {
			clearInterval(timer);
		};
	}, [minutes, seconds, hours, days]);
	return isDone ? <h1>You Reach the awaited day</h1> : <h1>{timestamp}</h1>;
};

export default Timer;
