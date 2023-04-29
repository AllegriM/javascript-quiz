import {useQuestions} from "../utils/questions";

import QuestionResults from "./QuestionResults";
import QuestionStepper from "./QuestionStepper";
import Question from "./Question";
import {Button} from "./UI/Button";

export default function Game({info}: {info: Question}) {
  const {answeredQuestion, finishGame} = useQuestions();

  return (
    <>
      <QuestionStepper />
      <Question info={info} />
      <QuestionResults />
      {answeredQuestion === 10 && (
        <div className="w-fit mx-auto">
          <Button
            className="bg-yellow-300 text-black font-bold p-2 rounded-lg mt-4"
            onClick={finishGame}
          >
            Restart Game
          </Button>
        </div>
      )}
    </>
  );
}
