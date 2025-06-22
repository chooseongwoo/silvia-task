import ColorButton from "@/components/ColorButton";
import { colorOptions } from "@/constants/colorOptions";
import { useResultStore } from "@/contexts/result";
import { StroopQuestion } from "@/types/StroopQuestion";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface QuestionBoxProps {
  onClick: () => void;
}

export default function QuestionBox({
  instruction,
  word,
  colorHex,
  correctAnswer,
  onClick,
}: StroopQuestion & QuestionBoxProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const { increaseCorrect, increaseWrong } = useResultStore();

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>
        {instruction === "COLOR"
          ? "보기의 글자가 무슨 색으로 칠해져 있는지 골라주세요"
          : "보기의 글자가 의미하는 색을 골라주세요"}
      </Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleTitle}>보기</Text>
        <Text style={[styles.exampleWord, { color: colorHex }]}>{word}</Text>
      </View>
      <View style={styles.colorOptions}>
        {colorOptions.map((option, index) => (
          <ColorButton
            key={index}
            color={option.colorHex}
            onClick={() => {
              onClick();
              setSelectedColor(option.colorName);
              if (selectedColor === correctAnswer) {
                increaseCorrect();
              } else {
                increaseWrong();
              }
            }}
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
