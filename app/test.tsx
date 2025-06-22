import QuestionBox from "@/components/QuestionBox";
import Timer from "@/components/Timer";
import { useResultStore } from "@/contexts/result";
import { shuffledQuestions } from "@/data/stroopQuestions";
import { StroopQuestion } from "@/types/StroopQuestion";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function TestScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion: StroopQuestion = shuffledQuestions[currentIndex];
  const { reset, timeLeft } = useResultStore();

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    if (timeLeft <= 0) {
      router.replace("/result");
    }
  }, [timeLeft]);

  return (
    <View style={styles.container}>
      <Timer />
      <QuestionBox
        {...currentQuestion}
        onClick={() => {
          if (currentIndex + 1 >= shuffledQuestions.length) {
            router.replace("/result");
          }
          setCurrentIndex((prev) => prev + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 20,
  },
});
