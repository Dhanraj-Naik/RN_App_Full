import React, { useRef } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import {
    PanGestureHandler,
    ScrollView,
    State,
} from 'react-native-gesture-handler';

const DraggableBox = (props) => {

    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const lastOffset = useRef({ x: 0, y: 0 }).current;

    const onGestureEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationX: translateX,
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true }
    );

    const onHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            lastOffset.x += event.nativeEvent.translationX;
            lastOffset.y += event.nativeEvent.translationY;
            translateX.setOffset(lastOffset.x);
            translateX.setValue(0);
            translateY.setOffset(lastOffset.y);
            translateY.setValue(0);
        }
    };


    return (
        <PanGestureHandler
            {...props}
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
        >
            <Animated.View
                style={[styles.box, {
                    transform: [
                        { translateX: translateX },
                        { translateY: translateY },
                    ],
                }]}
            >
            </Animated.View>
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({
    box: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        backgroundColor: 'plum',
        margin: 10,
        zIndex: 200,
    },
});

export default DraggableBox;
