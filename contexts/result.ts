import { TOTAL_TIME } from "@/constants/timer";
import { create } from "zustand";

// 테스트 결과 상태 타입
interface ResultState {
  correct: number;
  wrong: number;
  timeLeft: number;
  increaseCorrect: () => void;
  increaseWrong: () => void;
  setTimeLeft: (time: number | ((prev: number) => number)) => void;
  reset: () => void;
}

// 테스트 결과 상태를 관리하는 스토어
export const useResultStore = create<ResultState>((set, get) => ({
  correct: 0,
  wrong: 0,
  timeLeft: TOTAL_TIME,
  // 맞힌 개수 증가 함수
  increaseCorrect: () => set({ correct: get().correct + 1 }),
  // 틀린 개수 증가 함수
  increaseWrong: () => set({ wrong: get().wrong + 1 }),
  setTimeLeft: (time: number | ((prev: number) => number)) =>
    set((state) => ({
      timeLeft: typeof time === "function" ? time(state.timeLeft) : time,
    })),
  // 스토어 초기화 함수
  reset: () =>
    set({
      correct: 0,
      wrong: 0,
      timeLeft: TOTAL_TIME,
    }),
}));
