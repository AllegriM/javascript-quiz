import {useQuestions} from "../utils/questions";

import {Button} from "./UI/Button";

export default function QuestionStepper() {
  const {nextQuestion, prevQuestion, currentQuestion, questions} = useQuestions();

  return (
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
  );
}
