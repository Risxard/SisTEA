import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "../../DropArea";

const DeleteBtn = ({ onPress, selectedCard }) => {
  if (selectedCard !== null) {
    console.log(selectedCard);
  }

  return (
    <TouchableOpacity
      style={{
        ...styles.deleteAction,
        backgroundColor: selectedCard === null ? "#7C82BC" : "#D40000",
      }}
      onPress={onPress}
    >
      <AntDesign name="delete" size={24} color="white" />
      <Text style={styles.lineText}>Apagar</Text>
    </TouchableOpacity>
  );
};
export default DeleteBtn;
