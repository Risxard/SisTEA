import React, { useEffect, useState } from "react";
import styles from "./DropArea";
import { View, Text, Image, TouchableOpacity, Pressable, TouchableWithoutFeedback } from "react-native";
import DeleteBtn from "./components/Btns/DeleteBtn";
import SpeakBtn from "./components/Btns/SpeakBtn";

import figuraInicial from "../../services/fakeApi/figuraInicial.json";
import EuEstou from "./components/Modal/EuEstou";

import { toString, speak } from "../../functions/TTS";
import Display from "./components/Display/Display";

const DropArea = (props) => {
  const [selectedInicial, setSelectedInicial] = useState([]);
  const [selectedFiguras, setSelectedFiguras] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const newItem = props.newItem;

  const image_path = "https://imgur.com/";

  const handleSelectedCard = (item) => {
    setSelectedCard(item);
  };

  const handleNewItem = (item) => {
    setSelectedInicial(item);
  };

  useEffect(() => {
    if (newItem != null && newItem.type === "inicial") {
      setSelectedInicial([newItem]);
    }

    if (newItem != null && newItem.type === "figuras") {
      const idNaoExiste = !selectedFiguras.some(
        (item) => item.id === newItem.id
      );
      const menosQueTresObjetos = selectedFiguras.length < 3;

      if (idNaoExiste && menosQueTresObjetos) {
        setSelectedFiguras((prevSelectedFiguras) => [
          ...prevSelectedFiguras,
          newItem,
        ]);
      }
    }
  }, [newItem]);

  const deleteCard = (item) => {
    const idToDelete = item.id;

    if (item.type === "inicial") {
      setSelectedInicial((prevSelectedFiguras) => {
        const novoArray = prevSelectedFiguras.filter(
          (item) => item.id !== idToDelete
        );

        if (JSON.stringify(prevSelectedFiguras) !== JSON.stringify(novoArray)) {
          return novoArray;
        }
        return prevSelectedFiguras;
      });
    }
    if (item.type === "figuras") {
      setSelectedFiguras((prevSelectedFiguras) => {
        const novoArray = prevSelectedFiguras.filter(
          (item) => item.id !== idToDelete
        );

        if (JSON.stringify(prevSelectedFiguras) !== JSON.stringify(novoArray)) {
          return novoArray;
        }
        return prevSelectedFiguras;
      });
    }
    setSelectedCard(null);
  };

  function handleResetSelectedCard() {
    setSelectedCard(null);
  }

  return (
    <TouchableWithoutFeedback onPress={handleResetSelectedCard}>
      <View style={styles.dropArea}>
        <Display
          selectedCallBack={handleSelectedCard}
          selectedInicial={selectedInicial}
          selectedFiguras={selectedFiguras}
          selectedCard={selectedCard}
          resetSelectedCard={handleResetSelectedCard}
        />

        <Pressable style={styles.euQueroContainer}>
          {figuraInicial.map((card) => {
            return (
              <TouchableOpacity
                style={styles.euQueroItem}
                key={card.id}
                onPress={() => setSelectedInicial([card])}
              >
                <Text style={styles.euQueroText}>{card.name}</Text>
                <Image
                  source={{ uri: `${image_path}${card.image}` }}
                  style={styles.euQueroImage}
                />
              </TouchableOpacity>
            );
          })}

          <EuEstou newItemCallBack={handleNewItem} />

          <View style={styles.actionList}>
            <SpeakBtn
              onPress={() => {
                speak(toString(selectedInicial, selectedFiguras));
              }}
            />

            <DeleteBtn
              onPress={() => selectedCard && deleteCard(selectedCard)}
              selectedCard={selectedCard}
            />
          </View>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DropArea;
