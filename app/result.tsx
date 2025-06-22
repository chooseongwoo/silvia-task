import ResultItem from "@/components/ResultItem";
import { TOTAL_TIME } from "@/constants/timer";
import { useResultStore } from "@/contexts/result";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResultScreen() {
  const { correct, wrong, timeLeft, reset } = useResultStore();
  const total = correct + wrong;
  const accuracy = Math.round((correct / total) * 100);

  const getFeedbackMessage = () => {
    if (accuracy === 100) return "완벽한 결과예요!";
    if (accuracy >= 90) return "아주 정확해요!";
    if (accuracy >= 75) return "좋은 결과예요!";
    return "조금 더 집중해보세요!";
  };

  const elapsed = TOTAL_TIME - timeLeft;
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  const formatTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>검사 결과</Text>

      <View style={styles.resultBox}>
        <ResultItem label="⏱ 소요 시간" value={formatTime} />
        <ResultItem label="✅ 맞힌 문제" value={`${correct}개`} />
        <ResultItem label="❌ 틀린 문제" value={`${wrong}개`} />
        <ResultItem label="🎯 정답률" value={`${accuracy}%`} />
      </View>

      <Text style={styles.feedback}>{getFeedbackMessage()}</Text>
      <Pressable
        style={styles.homeButton}
        onPress={() => {
          reset();
          router.replace("/");
        }}
      >
        <Text style={styles.homeButtonText}>홈으로 돌아가기</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 40,
  },
  resultBox: {
    gap: 24,
    marginBottom: 50,
  },
  feedback: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "600",
    color: "#2E86AB",
  },
  homeButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#516AF1",
    borderRadius: 8,
  },
  homeButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
