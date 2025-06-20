import Timer from "@/components/Timer";
import { StyleSheet, View } from "react-native";

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
