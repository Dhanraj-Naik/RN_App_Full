//ScaleAnimation
import React, { useRef } from 'react';
import { Text, View, StyleSheet, Pressable, Animated } from 'react-native';

const ScaleAnimation = ({
    params,
}) => {

    const scaleAnimValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(0);

    const scaleAnimation = () => {
        scaleValue.current = scaleValue.current === 0 ? 1 : 0;
        Animated.spring(scaleAnimValue, {
            toValue: scaleValue.current,
            duration: 200,
            //you can define one of bounciness||speed||tension||friction 
            // stifness||damping||mass with spring anim
            friction: 1,
            // bounciness: 20,
            useNativeDriver: true,
        }).start(({ completed }) => {

        });
    };

    return (
        <View style={styles.containerStyle}>
            <Pressable
                onPress={scaleAnimation}
            >
                <Text style={styles.textStyle}>PRESS ME</Text>
            </Pressable>


            <Animated.View
                style={[styles.boxStyle,
                {

                    transform: [{
                        scale: scaleAnimValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.4],
                        }),
                    }],
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

export default ScaleAnimation;
