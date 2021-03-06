import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

const HeightTranslateAnimation = ({
    params,
}) => {
    const heightAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(heightAnimation, {
            toValue: 1,
            duration: 3000
        }).start();
    }, [heightAnimation]);

    const boxStyle = {
        translate: []
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.box2} />
                <Animated.View style={[styles.box, {
                    // transform: [{
                    //     t
                    // }],
                    height: heightAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [100, 400],
                    }),
                }]} />

            </View>
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
        width: 100,
        height: 100,
        backgroundColor: 'tomato',
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'lightblue',
    }
});

export default HeightTranslateAnimation;
