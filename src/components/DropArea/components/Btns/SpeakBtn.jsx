import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "../../DropArea";

const SpeakBtn = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.speakAction} onPress={onPress}>
      <AntDesign name="sound" size={24} color="white" />
      <Text style={styles.lineText}>Falar</Text>
    </TouchableOpacity>
  );
};
export default SpeakBtn;
