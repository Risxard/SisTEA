import React, { useState } from "react";
import { Pressable } from "react-native";
import { View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native";

import styles from "./styles";
import figuras from "../../services/fakeApi/figuras.json";

const Figuras = ({newItemCallBack}) => {
  const [selectedItem, setSelectedItem] = useState([]);

  const image_path = "https://imgur.com/";

  const handleSelecteditem = (item) => {
    setSelectedItem(item);
    newItemCallBack(item)
  };

  return (
    <View style={styles.pecsContainer}>
      <ScrollView style={[styles.scrollView]}>
        <View style={styles.ulInner}>
          <View style={styles.ul}>
            {figuras.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleSelecteditem(item)}
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
  );
};

export default Figuras;
