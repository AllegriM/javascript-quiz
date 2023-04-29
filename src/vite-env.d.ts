/// <reference types="vite/client" />

interface Question {
  id: number;
  question: string;
  code: string;
  answers: string[];
  correctAnswer: number;
  userSelectedAnswer?: number;
  isCorrectUserAnswer?: boolean;
}

interface QuestionOptionsProps {
  answer: string;
  answerIndex: number;
  info: Question;
}
