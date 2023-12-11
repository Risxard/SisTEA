import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import popModal from "./style";
import styles from "../../../DropArea";

import array from "../../../../../services/fakeApi/EuEstou.json";

const EuEstou = ({ newItemCallBack }) => {
  const [visible, setVisible] = useState(false);
  const image_path = "https://imgur.com/";

  const handleInicial = (item) => {
    newItemCallBack(item);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.euQueroItem}
        key={1157}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.euQueroText}>EU ESTOU</Text>
        <Image
          source={{ uri: `${image_path}EHDMzG0.png` }}
          style={styles.euQueroImage}
        />
      </TouchableOpacity>

      <Modal transparent visible={visible}>
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onTouchEnd={() => {
            setVisible(false);
          }}
        >
          <View style={popModal.popUp}>
            {array.map((card) => {
              return (
                <TouchableOpacity
                  style={popModal.popUpItem}
                  key={card.id}
                  onPress={() => handleInicial([card])}
                >
                  <Text style={styles.euQueroText}>{card.name}</Text>
                  <Image
                    source={{ uri: `${image_path}${card.image}` }}
                    style={styles.euQueroImage}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default EuEstou;
