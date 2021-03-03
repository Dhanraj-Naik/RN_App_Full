import React, { useRef } from 'react';
import { Text, View, Animated, StyleSheet } from 'react-native';
import {
    PanGestureHandler,
    RotationGestureHandler,
    State,
} from 'react-native-gesture-handler';

const Twistable = (props) => {

    const gesture = useRef(new Animated.Value(0)).current;
    const rot = gesture
        .interpolate({
            inputRange: [-1.2, -1, -0.5, 0, 0.5, 1, 1.2],
            outputRange: [-0.52, -0.5, -0.3, 0, 0.3, 0.5, 0.52],
        })
        .interpolate({
            inputRange: [-100, 100],
            outputRange: ['-100rad', '100rad'],
        });

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { rotation: gesture } }],
        { useNativeDriver: true }
    );

    const onHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(gesture, {
                velocity: event.nativeEvent.velocity,
                tension: 10,
                friction: 0.2,
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }
    };

    const nHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(gesture, {
                velocity: event.nativeEvent.velocity,
                tension: 10,
                friction: 0.2,
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <RotationGestureHandler
            {...props}
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}>
            <Animated.View style={{ transform: [{ rotate: rot }] }}>
                {props.children}
            </Animated.View>
        </RotationGestureHandler>
    );
};

const styles = StyleSheet.create({

});

export default Twistable;
