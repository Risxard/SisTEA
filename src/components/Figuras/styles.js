import { ScaledSheet } from 'react-native-size-matters';


const styles = ScaledSheet.create({
  pecsContainer:{
    flexDirection: "column",
    justifyContent: 'space-between',
    backgroundColor: "#F1F1F1",
    gap: 20
  },
  scrollView: {
    width: "100%",
    maxHeight: "300@s",
    flexDirection: 'column',
  },
  ulInner:{
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: '3@s',
  },
  ul: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: '5@msr',
    alignItems: 'flex-start', // Alinhar os itens à esquerda
    justifyContent: 'flex-start',  // Centralizar os itens horizontalmente
    gap:'3@s',
  },
  li: {
    width: '24.34%',
    height: '100@s',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    backgroundColor: "#FFFF",
    paddingTop: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    gap:'3@s',
  },
  liText: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: 'center',
    paddingHorizontal: 3,
  },
  liImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
});


export default styles;