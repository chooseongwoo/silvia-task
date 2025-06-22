import TimerIcon from "@/components/ui/TimerIcon";
import { SCREEN_WIDTH, TOTAL_TIME } from "@/constants/timer";
import { useResultStore } from "@/contexts/result";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Timer() {
  const { timeLeft, setTimeLeft } = useResultStore();

  // 타이머를 1초마다 감소시키며, 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [setTimeLeft]);

  // 남은 시간에 따라 프로그레스바의 너비 계산
  const progressWidth = (timeLeft / TOTAL_TIME) * (SCREEN_WIDTH - 30);

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: progressWidth }]} />
      <View style={styles.textBox}>
        <TimerIcon />
        <Text style={styles.remainTimeText}>
          {Math.floor(timeLeft / 60)} :{" "}
          {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "#eee",
  },
  progressBar: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#ff8484",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    zIndex: 0,
  },
  textBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    zIndex: 1,
  },
  remainTimeText: {
    fontSize: 24,
    color: "#333",
    textAlign: "center",
  },
});
