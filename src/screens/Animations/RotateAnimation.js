//ScaleAnimation
import React, { useRef } from 'react';
import { Text, View, StyleSheet, Pressable, Animated } from 'react-native';

const RotateAnimation = ({
    params,
}) => {

    const animationValue = useRef(new Animated.Value(0)).current;
    const trackValue = useRef(0);

    const rotateAnimation = () => {
        trackValue.current = trackValue.current === 0 ? 1 : 0;
        Animated.spring(animationValue, {
            toValue: trackValue.current,
            duration: 200,
            useNativeDriver: true,
        }).start(({ completed }) => {

        });
    };

    return (
        <View style={styles.containerStyle}>
            <Pressable
                onPress={rotateAnimation}
            >
                <Text style={styles.textStyle}>PRESS ME</Text>
            </Pressable>


            <Animated.View
                style={[styles.boxStyle,
                {

                    transform: [{
                        rotate: animationValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '60deg'],
                        }),
                    }],
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
        backgroundColor: '#FF5A5A',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RotateAnimation;
