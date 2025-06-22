import { QuestionType, StroopQuestion } from "@/types/StroopQuestion";
import { shuffleArray } from "@/utils/shuffleArray";
const stroopQuestions: StroopQuestion[] = [];

const colorOptions = [
  { colorHex: "#FE4A4A", colorName: "빨강" },
  { colorHex: "#516AF1", colorName: "파랑" },
  { colorHex: "#FFC32B", colorName: "노랑" },
  { colorHex: "#000000", colorName: "검정" },
];

const instructions: QuestionType[] = ["MEANING", "COLOR"];

for (const instruction of instructions) {
  for (const wordOption of colorOptions) {
    for (const colorOption of colorOptions) {
      stroopQuestions.push({
        instruction,
        word: wordOption.colorName,
        colorHex: colorOption.colorHex,
        correctAnswer:
          instruction === "MEANING"
            ? wordOption.colorName
            : colorOption.colorName,
      });
    }
  }
}

export const shuffledQuestions = shuffleArray(stroopQuestions);
