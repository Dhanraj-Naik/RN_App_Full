//ScaleAnimation
import React, { useRef } from 'react';
import { Text, View, StyleSheet, Pressable, Animated } from 'react-native';

const ColorAnimation = ({
    params,
}) => {

    const animationValue = useRef(new Animated.Value(0)).current;
    const trackValue = useRef(0);

    const startAnimation = () => {
        trackValue.current = trackValue.current === 0 ? 1 : 0;
        Animated.timing(animationValue, {
            toValue: trackValue.current,
            duration: 800,
            useNativeDriver: false,
        }).start(({ completed }) => {

        });
    };

    const boxInterpolation = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgb(90,210,244)', 'rgb(224,82,99)'],
    });

    return (
        <View style={styles.containerStyle}>
            <Pressable
                onPress={startAnimation}
            >
                <Text style={styles.textStyle}>PRESS ME</Text>
            </Pressable>


            <Animated.View
                style={[styles.boxStyle,
                {
                    backgroundColor: boxInterpolation,


                },
                ]}
            >
                <Text>{'HELLO'}</Text>
            </Animated.View>
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
        // backgroundColor: '#FF5A5A',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ColorAnimation;
