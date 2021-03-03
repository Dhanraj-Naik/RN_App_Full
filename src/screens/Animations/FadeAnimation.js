import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, Pressable, Easing, } from 'react-native';

const FadeAnimation = ({
    params,
}) => {

    const fadeAnimValue = useRef(new Animated.Value(0)).current;
    const fadeValue = useRef(0);

    const fadeAnimation = () => {
        fadeValue.current = fadeValue.current === 0 ? 1 : 0;
        Animated.timing(fadeAnimValue, {
            toValue: fadeValue.current,
            duration: 400,
            useNativeDriver: true,
        }).start(({ completed }) => {

        });
    };

    return (
        <View style={styles.containerStyle}>
            <Pressable
                onPress={fadeAnimation}
            >
                <Text style={styles.textStyle}>PRESS ME</Text>
            </Pressable>


            <Animated.View
                style={[styles.boxStyle,
                {
                    opacity: fadeAnimValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                    }),
                },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        padding: 20,
        color: 'white',
        backgroundColor: '#36D572',
        marginVertical: 20
    },
    boxStyle: {
        width: 60,
        height: 60,
        backgroundColor: '#FF5A5A',
    }
});

export default FadeAnimation;
