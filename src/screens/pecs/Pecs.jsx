import React, { useState } from "react";
import Figuras from "../../components/Figuras/Figuras.jsx";
import DropArea from "../../components/DropArea/DropArea.jsx";
import { StatusBar } from "react-native";
import styles from "./styles.js";

import { SafeAreaView } from "react-native-safe-area-context";
const Pecs = () => {
  const [newItem, setNewItem] = useState ([])

  const handleNewItem = (item) => {
    setNewItem(item)
  }

  return (
    <SafeAreaView  style={styles.pecsContainer}>
      <StatusBar hidden/>
      <DropArea newItem={newItem}></DropArea>
      <Figuras newItemCallBack={handleNewItem}/>
    </SafeAreaView>
  );
};

export default Pecs;
