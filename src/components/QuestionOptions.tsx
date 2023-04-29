import {motion} from "framer-motion";

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

export default function QuestionOptions({answer, answerIndex, info}: QuestionOptionsProps) {
  const {selectAnswer} = useQuestions();

  const handleSelectAnswer = (questionId: number, answerIndex: number) => () => {
    // console.log("Hello");
    selectAnswer(questionId, answerIndex);
  };

  const item = {
    hidden: {opacity: 0},
    show: {opacity: 1},
  };

  return (
    <motion.li variants={item}>
      <Button
        className={`w-full text-left border p-2 ${getBackgroundColor(info, answerIndex)} ${
          info.userSelectedAnswer !== undefined ? "none" : "hover:bg-stone-700"
        }`}
        disabled={info.userSelectedAnswer !== undefined}
        onClick={handleSelectAnswer(info.id, answerIndex)}
      >
        <span>{answer}</span>
      </Button>
    </motion.li>
  );
}
