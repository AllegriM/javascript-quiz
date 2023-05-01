import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";
import SyntaxHighlighter from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";

import QuestionOptions from "./QuestionOptions";

export default function Question({info}: {info: Question}) {
  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <li key={info.id} className="list-none w-80 md:w-[600px]">
      <p className="p-3 bg-yellow-400 text-black font-medium ">{info.question}</p>
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        style={style}
        useInlineStyles={true}
      >
        {info.code}
      </SyntaxHighlighter>
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
