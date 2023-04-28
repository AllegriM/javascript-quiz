import {useQuestions} from "../utils/questions";

import {Button} from "./UI/Button";

const getBackgroundColor = (info: Question, answerIndex: number) => {
  const {userSelectedAnswer, correctAnswer} = info;

  if (userSelectedAnswer === undefined) return "bg-transparent";

  if (answerIndex !== correctAnswer && answerIndex !== userSelectedAnswer) return "bg-transparent";
  if (answerIndex === correctAnswer) return "bg-green-500";
  if (answerIndex === userSelectedAnswer) return "bg-red-500";

  return "bg-transparent";
};

export default function Question({info}: {info: Question}) {
  const {
    selectAnswer,
    nextQuestion,
    prevQuestion,
    currentQuestion,
    questions,
    answeredQuestion,
    finishGame,
  } = useQuestions();

  const handleSelectAnswer = (questionId: number, answerIndex: number) => () => {
    // console.log("Hello");
    selectAnswer(questionId, answerIndex);
  };

  let correct = 0;
  let wrong = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    const {userSelectedAnswer, correctAnswer} = question;

    if (userSelectedAnswer === undefined) unanswered++;
    else if (correctAnswer === userSelectedAnswer) correct++;
    else wrong++;
  });

  return (
    <>
      <div className="flex justify-between items-center">
        <Button
          className="bg-blue-500 rounded-md text-white p-2 hover:bg-blue-400 font-bold my-2"
          onClick={prevQuestion}
        >
          Prev Question
        </Button>
        <p className="text-xl font-bold">
          {currentQuestion + 1}/{questions.length}
        </p>
        <Button
          className="bg-blue-500 rounded-md text-white p-2 hover:bg-blue-400 font-bold my-2"
          onClick={nextQuestion}
        >
          Next Question
        </Button>
      </div>
      <li key={info.id} className="list-none">
        <p className="border p-3 bg-yellow-600 language-css">{info.question}</p>
        <ul>
          {info.answers.map((answer, answerIndex) => {
            return (
              <li key={answer}>
                <Button
                  className={`w-full text-left border p-2 ${getBackgroundColor(
                    info,
                    answerIndex,
                  )} ${info.userSelectedAnswer !== undefined ? "none" : "hover:bg-stone-700"}`}
                  disabled={info.userSelectedAnswer !== undefined}
                  onClick={handleSelectAnswer(info.id, answerIndex)}
                >
                  <span>{answer}</span>
                </Button>
              </li>
            );
          })}
        </ul>
      </li>
      <footer>
        <p className="text-center mt-2">Result:</p>
        <div className="flex gap-2 justify-center">
          <span className="text-center">✔️{correct}</span> - <span>❌{wrong}</span> -{" "}
          <span>❓{unanswered}</span>
        </div>
      </footer>
      {answeredQuestion === 10 && (
        <Button
          className="bg-yellow-300 text-black font-bold p-2 rounded-lg mt-4"
          onClick={finishGame}
        >
          Restart Game
        </Button>
      )}
    </>
  );
}
