import { TOTAL_TIME } from "@/constants/timer";
import { create } from "zustand";

type ResultState = {
  correct: number;
  wrong: number;
  timeLeft: number;
  increaseCorrect: () => void;
  increaseWrong: () => void;
  setTimeLeft: (time: number | ((prev: number) => number)) => void;

  reset: () => void;
};

export const useResultStore = create<ResultState>((set, get) => ({
  correct: 0,
  wrong: 0,
  timeLeft: TOTAL_TIME,
  increaseCorrect: () => set({ correct: get().correct + 1 }),
  increaseWrong: () => set({ wrong: get().wrong + 1 }),
  setTimeLeft: (time: number | ((prev: number) => number)) =>
    set((state) => ({
      timeLeft: typeof time === "function" ? time(state.timeLeft) : time,
    })),
  reset: () =>
    set({
      correct: 0,
      wrong: 0,
      timeLeft: TOTAL_TIME,
    }),
}));
