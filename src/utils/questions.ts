import {create} from "zustand";
import conffeti from "canvas-confetti";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  answeredQuestion: number;
  finishGame: () => void;
}

export const useQuestions = create<State>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    answeredQuestion: 0,
    loading: false,

    fetchQuestions: async (limit: number) => {
      const response = await fetch("http://localhost:5173/data/questions.json");
      const data: Question[] = await response.json();

      const questions = data.sort(() => Math.random() - 0.5).slice(0, limit);

      set({
        questions,
      });
    },

    selectAnswer: (questionId: number, answerIndex: number) => {
      const {questions, answeredQuestion} = get();
      const newQuestions: Question[] = structuredClone(questions);
      const questionIndex = newQuestions.findIndex((question) => question.id === questionId);
      const questionInfo = questions[questionIndex];
      const answerIsCorrect = questionInfo.correctAnswer === answerIndex;

      if (answerIsCorrect) conffeti();

      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer: answerIsCorrect,
        userSelectedAnswer: answerIndex,
      };

      set({
        questions: newQuestions,
        answeredQuestion: answeredQuestion + 1,
      });
    },
    nextQuestion: () => {
      const {questions, currentQuestion} = get();
      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < questions.length) {
        set({currentQuestion: nextQuestion});
      }
    },
    prevQuestion: () => {
      const {currentQuestion} = get();
      const prevQuestion = currentQuestion - 1;

      if (prevQuestion >= 0) {
        set({currentQuestion: prevQuestion});
      }
    },
    finishGame: () => {
      // set questions to empty array
      // set currentQuestion to 0
      // set answeredQuestion to 0

      set({
        questions: [],
        currentQuestion: 0,
        answeredQuestion: 0,
      });
    },
  };
});
