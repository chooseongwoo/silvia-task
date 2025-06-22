import { StyleSheet, Text, View } from "react-native";

export default function ResultItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.resultItem}>
      <Text style={styles.resultLabel}>{label}</Text>
      <Text style={styles.resultValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
