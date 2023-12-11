
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  SafeAreaView: {
    flex: 1,
    gap: '20@vs'
  },
  pecsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between',
    backgroundColor: "#F1F1F1",
  },
  scrollView: {
    width: "100%",
    flexDirection: 'column',
  },
  ulInner: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: '3@s',
  },
  ul: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: '5@vs',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '3@s',
  },
  li: {
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
    gap: '3@s',
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