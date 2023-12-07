import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "../../DropArea";

const DeleteBtn = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.deleteAction} onPress={onPress}>
      <AntDesign name="delete" size={24} color="white" />
      <Text style={styles.lineText}>Apagar</Text>
    </TouchableOpacity>
  );
};
export default DeleteBtn;
