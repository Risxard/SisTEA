import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../DropArea";

const Display = ({ selectedInicial, selectedFiguras, selectedCard, selectedCallBack }) => {
  const image_path = "https://imgur.com/";

  function handleSelectedCard(item) {
    selectedCallBack(item);
  }

  return (
    <View style={styles.lineReader}>
      <View style={styles.faixaCentral} />
      <View style={styles.cardsContainer}>
        {selectedInicial.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={
              selectedCard?.id === card.id && selectedCard?.type === card.type
                ? [styles.lineReaderLi, styles.selectedCard]
                : styles.lineReaderLi
            }
            onPress={() => handleSelectedCard(card)}
          >
            <Text style={styles.liText}>{card.name}</Text>
            <Image
              source={{ uri: `${image_path}${card?.image}` }}
              style={styles.liImage}
            />
          </TouchableOpacity>
        ))}

        {selectedFiguras.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={
              selectedCard?.id === card.id && selectedCard?.type === card.type
                ? [styles.lineReaderLi, styles.selectedCard]
                : styles.lineReaderLi
            }
            onPress={() => handleSelectedCard(card)}
          >
            <Text style={styles.liText}>{card.name}</Text>
            <Image
              source={{ uri: `${image_path}${card.image}` }}
              style={styles.liImage}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Display;
