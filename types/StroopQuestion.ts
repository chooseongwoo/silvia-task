type QuestionType = "MEANING" | "COLOR";

type StroopQuestion = {
  instruction: QuestionType;
  word: string;
  colorHex: string;
  correctAnswer: string;
};

export type { QuestionType, StroopQuestion };
