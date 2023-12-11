import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, TextInput } from "react-native";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, useAnimatedProps, runOnJS } from "react-native-reanimated";
import { PanGestureHandler } from 'react-native-gesture-handler';
import AsyncStorage from "@react-native-async-storage/async-storage";





const ATextInput = Animated.createAnimatedComponent(TextInput)
const WIDTH = Dimensions.get('window').width - 80;
const KNOBSIZE = 20;
const MAXWIDTH = WIDTH - KNOBSIZE / 2 + 6;



const InputRange = ({ min, max, steps, handleWidth, handleHeight }) => {
    const [newValue, setNewValue] = useState(66);

    useEffect(() => {
        if (handleWidth !== undefined) {
            handleWidth(`${newValue}`)
        }
        if (handleHeight !== undefined) {
            handleHeight(`${newValue}`)
        }
    }, [newValue])



    const x = useSharedValue(0);
    const sc = useSharedValue(1);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startX = x.value;
        },
        onActive: (event, ctx) => {
            x.value =
                ctx.startX + event.translationX < 0
                    ? 0
                    : ctx.startX + event.translationX > MAXWIDTH
                        ? MAXWIDTH
                        : ctx.startX + event.translationX;
            sc.value = 1.3;
        },
        onEnd: () => {
            sc.value = 1;
            runOnJS(setNewValue)(Math.round((min + (x.value / MAXWIDTH) * (max - min)) / steps) * steps);
        },
    });

    const styleLine = useAnimatedStyle(() => {
        return {
            backgroundColor: '#998BEB',
            height: 8,
            marginTop: -8,
            borderRadius: 8,
            width: x.value,
        };
    });
    const knobStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: x.value,
                },
                {
                    scale: sc.value,
                },
                {
                    rotate: '45deg',
                },
            ],
        };
    });

    const animetedTextInputProps = useAnimatedProps(() => {
        return {
            text: `${Math.round((min + (x.value / MAXWIDTH) * (max - min)) / steps) * steps}px`
        }
    });

    return (
        <View style={styles.container}>
            <ATextInput style={styles.currentSize} defaultValue={'0'} editable={false} animatedProps={animetedTextInputProps}></ATextInput>
            <View style={styles.labelsContainer}>
                <Text style={styles.label}>{min}</Text>
                <Text style={styles.label}>{max}</Text>
            </View>
            <View style={styles.track} />
            <Animated.View style={styleLine} />
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.knob, knobStyle]} />
            </PanGestureHandler>
        </View>
    )
}

const styles = StyleSheet.create({
    currentSize: {
        textAlign: 'center',
        fontSize: 26,
        color: 'black',
        marginBottom: 20,
    },
    container: {
        marginHorizontal: 40,
    },
    track: {
        height: 8,
        backgroundColor: '#aaadb2',
        borderRadius: 8,
    },
    labelsContainer: {
        width: WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    label: {
        color: '#777',
    },
    knob: {
        height: KNOBSIZE,
        width: KNOBSIZE,
        borderTopRightRadius: KNOBSIZE / 2,
        borderBottomRightRadius: KNOBSIZE / 2,
        borderBottomLeftRadius: KNOBSIZE / 2,
        backgroundColor: '#9c44dc',
        marginTop: - (KNOBSIZE / 2 - 12),
        marginLeft: -8,
    }
})

export default InputRange;
