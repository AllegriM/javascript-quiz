import {useQuestions} from "../utils/questions";

import {Button} from "./UI/Button";

export default function StartGame() {
  const {fetchQuestions} = useQuestions();

  return (
    <Button
      className="bg-blue-500 rounded-md text-white p-2 hover:bg-blue-400 font-bold"
      onClick={() => fetchQuestions(10)}
    >
      <span>Start Quiz</span>
    </Button>
  );
}
