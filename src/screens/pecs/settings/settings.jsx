import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import InputRange from "../../../components/InputRange/index.js";
import { ScaledSheet } from "react-native-size-matters";
import figuras from "./assets/testCards.json";

import styles from "./styles.js";
import ApplyBtn from "./components/applyBtn.jsx";
import DefaultBtn from "./components/defaultBtn.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = () => {
  const [largura, setLargura] = useState(83);
  const [altura, setAltura] = useState(110);

  const image_path = "https://imgur.com/";
  const SETWIDTH = largura !== 0 ? `${largura}` : 83;
  const SETHEIGHT = altura !== 0 ? `${altura}` : 110;

  const sizeSettings = ScaledSheet.create({
    width: `${largura}@s`,
    height: `${altura}@vs`,
  });

  const applyNewSize = async (SETHEIGHT, SETWIDTH) =>{
    await AsyncStorage.setItem('@asyncStorage:WIDTH', SETWIDTH)
    await AsyncStorage.setItem('@asyncStorage:HEIGHT', SETHEIGHT)
  }


  const handleNewWidth = (novaLargura) => {
    setLargura(novaLargura);
  };
  const handleNewHeight = (novaAltura) => {
    setAltura(novaAltura);
  };


  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem('@asyncStorage:WIDTH');
      await AsyncStorage.removeItem('@asyncStorage:HEIGHT');
      console.log('AsyncStorage limpo com sucesso!');
    } catch (error) {
      console.error('Erro ao limpar o AsyncStorage:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScrollView}>
        <View style={styles.scrollInner}>
          <View style={styles.inputs}>
            <View style={styles.section}>
              <Text style={styles.title}>Largura do card</Text>
              <InputRange
                min={60}
                max={170}
                steps={1}
                handleWidth={handleNewWidth}
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.title}>Altura do card</Text>
              <InputRange
                min={60}
                max={170}
                steps={1}
                handleHeight={handleNewHeight}
              />
            </View>
          </View>

          <View style={styles.pecsContainer}>
            <View style={[styles.scrollView]}>
              <View style={styles.ulInner}>
                <View style={styles.ul}>
                  {figuras.map((item) => (
                    <TouchableOpacity
                      key={item.id}
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
            </View>
          </View>

          <View style={styles.actionBtns}>
            <ApplyBtn onPress={() => applyNewSize(SETHEIGHT,SETWIDTH)}/>
            <DefaultBtn onPress={() => clearAsyncStorage()}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
