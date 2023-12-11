import { ScaledSheet } from "react-native-size-matters"

const styles = ScaledSheet.create({
    inputs:{
        gap: 30,
    },
    containerScrollView:{
        flexDirection: 'column',

    },
    scrollInner:{
        flexDirection: 'column',
        alignItems: 'center',
        gap: 30,
        paddingTop: '30@msr',
        paddingBottom: '30@msr',
    },
    container: {
        flex: 1,
        width: '100%',
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 30,
    },
    section: {
        gap: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 21,
        fontWeight: '600',
    },
    pecsContainer: {
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
    },
    actionBtns:{
        width: '100%',
        minHeight: '40@vs', 
        flexDirection: "row",
        position: "relative",
        justifyContent: 'center',
        gap: 10,
    }
})

export default styles