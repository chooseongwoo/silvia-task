import { Pressable, StyleSheet } from "react-native";

interface ColorButtonProps {
  color: string;
  onClick: () => void;
}

export default function ColorButton({ color, onClick }: ColorButtonProps) {
  return (
    <Pressable
      onPress={onClick}
      style={[styles.button, { backgroundColor: color }]}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
