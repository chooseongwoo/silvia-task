import QuestionBox from "@/components/QuestionBox";
import Timer from "@/components/Timer";
import { shuffledQuestions } from "@/data/stroopQuestions";
import { StroopQuestion } from "@/types/StroopQuestion";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function TestScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion: StroopQuestion = shuffledQuestions[currentIndex];

  return (
    <View style={styles.container}>
      <Timer />
      <QuestionBox
        {...currentQuestion}
        onClick={() => {
          if (currentIndex + 1 >= shuffledQuestions.length) {
            router.push("/result");
          }
          setCurrentIndex((prevIndex) => prevIndex + 1);
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
