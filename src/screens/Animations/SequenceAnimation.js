//ScaleAnimation
import React, { useRef } from 'react';
import { Text, View, StyleSheet, Pressable, Animated } from 'react-native';

const SequenceAnimation = ({
    params,
}) => {

    const animationValue = useRef(new Animated.Value(0)).current;
    const trackValue = useRef(0);

    const boxAnimationValue = useRef(new Animated.Value(0)).current;
    const trackBoxValue = useRef(0);

    const startAnimation = () => {
        trackValue.current = trackValue.current === 0 ? 1 : 0;
        trackBoxValue.current = trackBoxValue.current === 0 ? 1 : 0;
        Animated.sequence([
            Animated.timing(animationValue, {
                toValue: trackValue.current,
                duration: 600,
                useNativeDriver: false,
            }),

            Animated.timing(boxAnimationValue, {
                toValue: trackBoxValue.current,
                duration: 300,
                useNativeDriver: false,
            }),
        ]).start(({ completed }) => {

        });
    };

    const boxInterpolation = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 80],
    });
    const boxInterpolation2 = boxAnimationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 80],
    });

    return (
        <View style={styles.containerStyle}>
            <Text style={{ textAlign: 'center' }}>{'Animated.sequence() is used to run different animations one after the other'}</Text>
            <Pressable
                onPress={startAnimation}
            >
                <Text style={styles.textStyle}>PRESS ME</Text>
            </Pressable>


            <Animated.View
                style={[styles.boxStyle,
                {
                    transform: [{
                        translateX: boxInterpolation,
                    }],


                },
                ]}
            >
                <Text>{'HELLO'}</Text>
            </Animated.View>

            <Animated.View
                style={[styles.boxStyle,
                {
                    transform: [{
                        translateX: boxInterpolation2,
                    }],


                },
                ]}
            >
                <Text>{'WORLD'}</Text>
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
        alignItems: 'center',
        margin: 6,
    }
});

export default SequenceAnimation;
