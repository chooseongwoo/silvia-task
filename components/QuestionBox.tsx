import ColorButton from "@/components/ColorButton";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function QuestionBox() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const colorOptions = [
    { colorHex: "#FE4A4A", colorName: "빨강" },
    { colorHex: "#516AF1", colorName: "파랑" },
    { colorHex: "#FFC32B", colorName: "노랑" },
    { colorHex: "#000000", colorName: "검정" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>
        보기의 글자가 의미하는 색을 골라주세요
      </Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleTitle}>보기</Text>
        <Text style={styles.exampleWord}>빨강</Text>
      </View>
      <View style={styles.colorOptions}>
        {colorOptions.map((option, index) => (
          <ColorButton
            key={index}
            color={option.colorHex}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 20,
    gap: 50,
    marginTop: 80,
  },
  instructionText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
  },
  exampleBox: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    width: "100%",
    padding: 20,
  },
  exampleTitle: {
    fontSize: 16,
    color: "#555",
  },
  exampleWord: {
    fontSize: 44,
    fontWeight: "bold",
  },
  colorOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
