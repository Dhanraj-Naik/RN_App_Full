import React, { useRef } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const Snappable = (props) => {

    const dragX = useRef(new Animated.Value(0)).current;
    const dragY = useRef(new Animated.Value(0)).current;

    const transX = dragX.interpolate({
        inputRange: [-100, -50, 0, 50, 100],
        outputRange: [-30, -10, 0, 10, 30],
    });
    const transY = dragY.interpolate({
        inputRange: [-100, -50, 0, 50, 100],
        outputRange: [-30, -10, 0, 10, 30],
    });

    const onGestureEvent = Animated.event(
        [{
            nativeEvent: {
                translationX: dragX,
                // translationY: dragY,
            }
        }],
        { useNativeDriver: true }
    );
    const onHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(dragX, {
                velocity: event.nativeEvent.velocityX,
                tension: 10,
                friction: 2,
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }
    };
    return (
        <PanGestureHandler
            {...props}
            maxPointers={1}
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}>
            <Animated.View style={{
                transform: [{
                    translateX: transX,
                    // translateY: transY,
                }]
            }}>
                {props.children}
            </Animated.View>
        </PanGestureHandler>
    );
};

const styles = StyleSheet.create({

});

export default Snappable;
