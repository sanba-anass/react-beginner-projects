/* eslint-disable react/prop-types */
//import { useState } from "react";
import "../../App.css";
function Answer({
	option,
	questions,
	index,
	options,
	setOptions,
	setCorrectAnswers,
	setIsDisabled,
	seIsDisableQuestion,
	isDisableQuestions,
}) {
	const correctAnswer = questions[index].correctAnswer;
	const newAnswers = [...options];

	const handleChooseAnswer = () => {
		if (isDisableQuestions) {
			return;
		}
		setIsDisabled(false);
		seIsDisableQuestion(true);
		if (option.text === correctAnswer) {
			option.isCorrect = true;
			setCorrectAnswers((prevState) => prevState + 1);
			setOptions(newAnswers);
		} else {
			option.isCorrect = false;
		}
		const findAnswer = newAnswers.find(
			(option) => option.text === correctAnswer
		);
		if (findAnswer) {
			findAnswer.isCorrect = true;
			setOptions(newAnswers);
		}
	};

	let classes = "";
	if (option.isCorrect) {
		classes = "correct";
	} else if (option.isCorrect === false) {
		classes = "wrong";
	}
	//
	return (
		<li
			onClick={handleChooseAnswer.bind(null, option.text)}
			className={classes}
		>
			{option.text}
		</li>
	);
}

export default Answer;
