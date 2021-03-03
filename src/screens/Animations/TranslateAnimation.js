import React, { useRef } from 'react';
import { Text, View, StyleSheet, Animated, Pressable } from 'react-native';

const TranslateAnimation = ({
    params,
}) => {
    const translateAnimation = useRef(new Animated.Value(0)).current;
    const trackTranslation = useRef(0);

    const translationAnim = () => {
        trackTranslation.current = trackTranslation.current === 0 ? 1 : 0;
        Animated.timing(translateAnimation, {
            toValue: trackTranslation.current, //WITH INTERPOLATION
            // toValue: 200, //without interpolation
            duration: 400,
            useNativeDriver: true,
            extrapolate: 'clamp',
            // extrapolate: 'identity',
        }).start();
    }

    const translateStyle = {
        transform: [{
            translateX: translateAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 180]
            }),
            // translateX: translateAnimation, ////without interpolation

        }, {
            translateY: translateAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 280]
            }),
            // translateY: translateAnimation, //without interpolation
        }]
    }

    return (
        <Pressable style={styles.container} onPress={translationAnim}>
            <Animated.View
                style={[styles.boxStyle, translateStyle]}
            >

            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    boxStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'lightblue',
        // alignSelf: 'center',

    }
});

export default TranslateAnimation;
