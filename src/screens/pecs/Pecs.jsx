import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
} from "react-native";

import figuras from "../../services/fakeApi/figuras.json";
import DropArea from "../../components/DropArea/DropArea.jsx";

import styles from "./styles.js";

import { SafeAreaView } from "react-native-safe-area-context";
const Pecs = () => {
  const [selectedItem, setSelectedItem] = useState([]);

  const image_path = "https://imgur.com/";

  return (
    <SafeAreaView style={styles.SafeAreaView}>
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
                  style={[
                    styles.li,
                    item && item.id === selectedItem?.id && styles.item,
                  ]}
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
