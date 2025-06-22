import { create } from "zustand";

type ResultState = {
  correct: number;
  wrong: number;
  time: string;
  increaseCorrect: () => void;
  increaseWrong: () => void;
  setTime: (time: string) => void;
  reset: () => void;
};

export const useResultStore = create<ResultState>((set, get) => ({
  correct: 0,
  wrong: 0,
  time: "00:00",
  increaseCorrect: () => set({ correct: get().correct + 1 }),
  increaseWrong: () => set({ wrong: get().wrong + 1 }),
  setTime: (time: string) => set({ time }),
  reset: () => set({ correct: 0, wrong: 0, time: "00:00" }),
}));
