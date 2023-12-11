import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";

const ApplyBtn = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.applyAction,
        backgroundColor: "#998BEB",
      }}
      onPress={onPress}
    >
      <AntDesign name="check" size={24} color="white" />
      <Text style={styles.lineText}>Aplicar</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  applyAction: {
    flex: 1,
    maxWidth: 100,
    height: "auto",
    backgroundColor: "#7C82BC",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    flexDirection: "row",
    padding: 5,
    gap: 5,

    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  lineText: {
    color: "white",
    fontSize: 14,
  },
});

export default ApplyBtn;
