import QuestionBox from "@/components/QuestionBox";
import Timer from "@/components/Timer";
import { StyleSheet, View } from "react-native";

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Timer />
      <QuestionBox />
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
