import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResultScreen() {
  const correct = 9;
  const wrong = 1;
  const time = "00:42";
  const total = correct + wrong;
  const accuracy = Math.round((correct / total) * 100);

  const getFeedbackMessage = () => {
    if (accuracy === 100) return "완벽한 결과예요!";
    if (accuracy >= 90) return "아주 정확해요!";
    if (accuracy >= 75) return "좋은 결과예요!";
    return "조금 더 집중해보세요!";
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>검사 결과</Text>

      <View style={styles.resultBox}>
        <ResultItem label="⏱ 소요 시간" value={time} />
        <ResultItem label="✅ 맞힌 문제" value={`${correct}개`} />
        <ResultItem label="❌ 틀린 문제" value={`${wrong}개`} />
        <ResultItem label="🎯 정답률" value={`${accuracy}%`} />
      </View>

      <Text style={styles.feedback}>{getFeedbackMessage()}</Text>
      <Pressable style={styles.homeButton} onPress={() => router.replace("/")}>
        <Text style={styles.homeButtonText}>홈으로 돌아가기</Text>
      </Pressable>
    </SafeAreaView>
  );
}

function ResultItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.resultItem}>
      <Text style={styles.resultLabel}>{label}</Text>
      <Text style={styles.resultValue}>{value}</Text>
    </View>
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
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  resultLabel: {
    fontSize: 20,
    color: "#555",
  },
  resultValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
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
