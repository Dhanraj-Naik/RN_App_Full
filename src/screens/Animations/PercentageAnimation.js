import React, { useRef } from 'react';
import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

const PercentageAnimation = ({
    params,
}) => {
    const percentAnimation = useRef(new Animated.Value(0)).current;
    const tracker = useRef(0);

    const startAnimation = () => {
        tracker.current = tracker.current === 0 ? 1 : 0;

        Animated.timing(percentAnimation, {
            // toValue: 1,
            toValue: tracker.current,
            duration: 2000,
            useNativeDriver: false,
        })
            .start(() => {

            });
    };

    const widthInterploate = percentAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['20%', '50%'],
    });

    const heightInterploate = percentAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['20%', '30%'],
    });

    const animatedStyle = {
        // width: widthInterploate,
        height: heightInterploate,
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={startAnimation}
            >
                <Animated.View style={[styles.box, animatedStyle]} />
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: 'tomato',
        width: 40,
    }
});

export default PercentageAnimation;
