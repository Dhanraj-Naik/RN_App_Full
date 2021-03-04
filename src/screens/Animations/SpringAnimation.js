import React, { useRef } from 'react';
import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

const SpringAnimation = ({
    params,
}) => {
    const springAnimation = useRef(new Animated.Value(1)).current;
    const tracker = useRef(1);

    const startAnimation = () => {
        tracker.current = tracker.current === 1 ? 2 : 1;

        // springAnimation.addListener(({ value }) => {
        //     console.log('springAnimation: ',value);
        // })

        Animated.spring(springAnimation, {
            // toValue: 2,
            toValue: tracker.current,
            // duration: 2000,
            useNativeDriver: true,
            friction: 3,
            tension: 150,
        })
            .start(() => {

            });
    };

    const animatedStyle = {
        transform: [
            {
                scale: springAnimation,
            },
        ],
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={startAnimation}>
                <Animated.View style={[styles.box, animatedStyle]} />
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
        borderRadius: 40,
        backgroundColor: 'tomato',
    },
});

export default SpringAnimation;
