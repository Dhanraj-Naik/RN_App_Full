import React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

const HEADER_HEIGHT = 200;

const AnimatedHeader = ({
    animatedValue,
}) => {

    // console.log('AnimatedHeader animatedValue:', animatedValue.current);

    const headerHeight = animatedValue.interpolate({
        // inputRange: [0, HEADER_HEIGHT + insets.top],
        // outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [HEADER_HEIGHT, 44],
        extrapolate: 'clamp',
    });

    return (
        <Animated.View style={[styles.containerStyle, {
            // height: 200
            height: headerHeight,
        }]}>
            <Text>AnimatedHeader</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        // height: headerHeight,
        backgroundColor: 'lightblue',
    },
});

export default AnimatedHeader;
