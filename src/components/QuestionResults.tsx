import {useQuestions} from "../utils/questions";

export default function QuestionsResults() {
  const {questions} = useQuestions();

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
    <footer>
      <p className="text-center mt-2">Result:</p>
      <div className="flex gap-2 justify-center">
        <span className="text-center">✔️{correct}</span> - <span>❌{wrong}</span> -{" "}
        <span>❓{unanswered}</span>
      </div>
    </footer>
  );
}
