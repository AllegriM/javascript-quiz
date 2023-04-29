import JavascriptLogo from "./components/Icons/JavascriptLogo";
import {useQuestions} from "./utils/questions";
import StartGame from "./components/StartGame";
import Game from "./components/Game";

function App() {
  const {questions, currentQuestion} = useQuestions();

  const question = questions[currentQuestion];

  return (
    <div className="">
      <header className="flex flex-col justify-center items-center pt-6">
        <div className="flex gap-5 items-center">
          <JavascriptLogo height={60} width={60} />
          <h1 className="text-4xl font-medium">Javascript Quiz</h1>
        </div>
        <article className="mt-16">
          {!questions.length && <StartGame />}
          {questions.length > 0 && <Game info={question} />}
        </article>
      </header>
    </div>
  );
}

export default App;
