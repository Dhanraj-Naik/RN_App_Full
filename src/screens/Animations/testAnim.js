import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, Pressable, Easing, } from 'react-native';

const FadeAnimation = ({
    params,
}) => {
    return (
        <View style={styles.containerStyle}>
            <Pressable
                onPress={() => {

                }}
            >
                <Text style={styles.textStyle}>PRESS ME</Text>
            </Pressable>


            <Animated.View
                style={[styles.boxStyle]}
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
