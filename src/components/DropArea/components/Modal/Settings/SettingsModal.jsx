import { useState } from "react";

import { Modal, SafeAreaView } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";
import InputRange from "../../../../InputRange";

const SettingsModal = ({ isVisible, isVisibleHandle }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <>
      <Modal visible={isVisible}>
        <SafeAreaView
          style={styles.safeArea}
        >
          <Ionicons
            name="close"
            size={24}
            color="black"
            style={styles.settingIcon}
            onPress={() => {
              isVisibleHandle();
            }}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = ScaledSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  settingIcon: {
    top: 20,
    right: 0,
    marginRight: 20,
    position: "absolute",
  },

});

export default SettingsModal;
