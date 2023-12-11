import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import figuras from "../../services/fakeApi/figuras.json";
import DropArea from "../../components/DropArea/DropArea.jsx";
import SettingsModal from "../../components/DropArea/components/Modal/Settings/SettingsModal.jsx";

import styles from "./styles.js";

import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";

const Pecs = () => {
  const image_path = "https://imgur.com/";
  const [selectedItem, setSelectedItem] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const [widthValue, setWidthValue] = useState(83);
  const [heightValue, setHeightValue] = useState(110);

  const isVisibleHandle = () => {
    switch (isVisible) {
      case false:
        setIsVisible(true);
        break;
      case true:
        setIsVisible(false);
        break;
      default:
        setIsVisible(false);
    }
  };



  const getAsyncStorageValue = async (newSize) => {

    try {
      const storedWidthValue = await AsyncStorage.getItem("@asyncStorage:WIDTH");
      const storedHeightValue = await AsyncStorage.getItem("@asyncStorage:HEIGHT");

      if (storedWidthValue !== null) {
        setWidthValue(storedWidthValue)
      } else {
        console.log("O valor de Width AsyncStorage é nulo.");
      }

      if (storedHeightValue !== null) {
        setHeightValue(storedHeightValue)
      } else {
        console.log("O valor de Height AsyncStorage é nulo.");
      }

    } catch (error) {
      console.error("Erro ao obter valor do AsyncStorage:", error);
    }


  };

  useEffect(() => {
    getAsyncStorageValue();
  }, []); 


  const sizeSettings = ScaledSheet.create({
    width: `${widthValue !== null && widthValue !== undefined ? `${widthValue}@s` : '100@s'}`,
    height: `${heightValue !== null && heightValue !== undefined ? `${heightValue}@vs` : '100@vs'}`,
  });


  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <SettingsModal isVisibleHandle={isVisibleHandle} isVisible={isVisible} />

      <StatusBar hidden />
      <DropArea newItem={selectedItem}></DropArea>

      <View style={styles.pecsContainer}>
        <ScrollView style={[styles.scrollView]}>
          <View style={styles.ulInner}>
            <View style={styles.ul}>
              {figuras.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setSelectedItem(item)}
                  activeOpacity={0.3}
                  style={[styles.li, sizeSettings]}
                >
                  <Text style={styles.liText}>{item.name}</Text>
                  <Image
                    source={{ uri: `${image_path}${item?.image}` }}
                    style={styles.liImage}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};


export default Pecs;
