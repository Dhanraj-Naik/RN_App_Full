import React, { useRef } from 'react';
import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

const LoopAnimation = ({
    params,
}) => {

    const loopAnimation = useRef(new Animated.Value(0)).current;
    const trackValue = useRef(0);

    const startAnimation = () => {
        loopAnimation.setValue(0);
        Animated.loop(
            Animated.timing(loopAnimation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            })
        ).start();
    };

    const animatedStyle = {
        transform: [
            {
                rotate: loopAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                }),
            },
        ],
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={startAnimation}
            >
                <Animated.View style={[styles.box,

                    animatedStyle]} />
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 80,
        height: 80,
        // borderRadius: 40,
        backgroundColor: 'tomato',
    },
});

export default LoopAnimation;
