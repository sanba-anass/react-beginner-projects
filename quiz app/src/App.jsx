import { useState } from "react";
import "./App.css";
import Answer from "./assets/components/Answer";
const questions = [
	{
		question: "who discovered radioactivity?",
		options: [
			{ text: "Marie Curie", isCorrect: null },
			{ text: "Henri Becquerel", isCorrect: null },
			{ text: "albert einstein", isCorrect: null },
			{ text: "Mileva Marić", isCorrect: null },
		],
		correctAnswer: "Henri Becquerel",
	},
	{
		question: "who is the biggest bird in the world?",
		options: [
			{ text: "common ostrich", isCorrect: null },
			{ text: "Emus", isCorrect: null },
			{ text: "Penguins", isCorrect: null },
			{ text: "Rheas", isCorrect: null },
		],
		correctAnswer: "common ostrich",
	},
	{
		question: "how many planets in the solar system?",
		options: [
			{ text: "10", isCorrect: null },
			{ text: "7", isCorrect: null },
			{ text: "12", isCorrect: null },
			{ text: "8", isCorrect: null },
		],
		correctAnswer: "8",
	},
	{
		question: "what movie won the most oscars?",
		options: [
			{ text: "Blade Runner 2049", isCorrect: null },
			{ text: "Scent of a Woman", isCorrect: null },
			{
				text: "The Lord of the Rings: The Return of the King",
				isCorrect: null,
			},
			{ text: "The Social Network", isCorrect: null },
		],
		correctAnswer: "The Lord of the Rings: The Return of the King",
	},
];
function App() {
	const [index, setIndex] = useState(0);
	const [count, setCount] = useState(0);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [isDisabled, setIsDisabled] = useState(true);
	const [isDisableQuestions, seIsDisableQuestion] = useState(false);
	const [, setOptions] = useState();
	const nextQuestionHandler = () => {
		setIsDisabled(true);
		seIsDisableQuestion(false);
		setCount((count) => count + 1);
		if (index === questions.length - 1) {
			return;
		}
		setIndex((index) => index + 1);
		console.log(index);
	};
	const restartQuiz = () => {
		location.reload();
	};
	const final = (
		<div>
			<h2 className="finished">
				{correctAnswers} of {questions.length} are correct!
			</h2>
			<button onClick={restartQuiz}>restart quiz</button>
		</div>
	);
	return (
		<>
			<div className="questions-container">
				{count === questions.length
					? final
					: questions.map((question, index) => (
							<>
								<h1 className="question" key={question.question}>
									{index + 1 + " - " + question.question}
								</h1>
								<ul className={isDisableQuestions ? "disabled-questions" : ""}>
									{question.options.map((option) => (
										<Answer
											key={option.text}
											option={option}
											isCorrect={option.isCorrect}
											index={index}
											questions={questions}
											options={question.options}
											setOptions={setOptions}
											setCorrectAnswers={setCorrectAnswers}
											setIsDisabled={setIsDisabled}
											seIsDisableQuestion={seIsDisableQuestion}
											isDisableQuestions={isDisableQuestions}
										/>
									))}
								</ul>
								<button disabled={isDisabled} onClick={nextQuestionHandler}>
									Next Question
								</button>
							</>
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  ))[index]}
			</div>
		</>
	);
}

export default App;
