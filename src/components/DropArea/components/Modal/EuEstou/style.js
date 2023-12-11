import { ScaledSheet } from 'react-native-size-matters';

const popModal = ScaledSheet.create({
    popUp: {
      flex: 1,
      width: '300@s',
      flexWrap: 'wrap',
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "flex-start",
      backgroundColor: "#7C82BC",
  
      borderColor: 'transparent',
  
      borderWidth: 1,
      borderRadius: 6,
      paddingHorizontal: 10,
      paddingVertical: 10,
      position: 'absolute',
      gap: 3,
    },
    popUpItem: {
      flex: 1,
      minWidth: 90,
      maxWidth: 90,
      height: 120,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: 'transparent',
      borderRadius: 5,
      backgroundColor: "#FFF",
      paddingTop: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      gap: 3,
    }
  });

  export default popModal;