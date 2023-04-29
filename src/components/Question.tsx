import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";

import QuestionOptions from "./QuestionOptions";

export default function Question({info}: {info: Question}) {
  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <li key={info.id} className="list-none">
      <p className="border p-3 bg-yellow-600 language-css">{info.question}</p>
      <AnimatePresence>
        <motion.ul animate="show" initial="hidden" variants={container}>
          {info.answers.map((answer, answerIndex) => {
            return (
              <QuestionOptions key={answer} answer={answer} answerIndex={answerIndex} info={info} />
            );
          })}
        </motion.ul>
      </AnimatePresence>
    </li>
  );
}
