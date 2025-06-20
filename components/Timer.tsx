import TimerIcon from "@/components/ui/TimerIcon";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const TOTAL_TIME = 60;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

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
