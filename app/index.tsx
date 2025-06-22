import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.areaView}>
      <Text style={styles.title}>인지검사 - Color Stroop</Text>
      <Pressable style={styles.button} onPress={() => router.push("/test")}>
        <Text style={styles.buttonText}>시작하기</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#516AF1",
  },
  button: {
    padding: 15,
    backgroundColor: "#516AF1",
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
