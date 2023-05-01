import {useQuestions} from "../utils/questions";

import {Button} from "./UI/Button";

export default function QuestionStepper() {
  const {nextQuestion, prevQuestion, currentQuestion, questions} = useQuestions();

  return (
    <div className="flex justify-between items-center">
      <Button
        className="bg-neutral-700 rounded-sm text-white p-2 hover:bg-neutral-600 font-bold my-2"
        onClick={prevQuestion}
      >
        {"<"}
      </Button>
      <p className="text-xl font-bold">
        {currentQuestion + 1}/{questions.length}
      </p>
      <Button
        className="bg-neutral-700 rounded-sm text-white p-2 hover:bg-neutral-600 font-bold my-2"
        onClick={nextQuestion}
      >
        {">"}
      </Button>
    </div>
  );
}
