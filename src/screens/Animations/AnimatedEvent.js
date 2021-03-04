import React, { useRef, useState } from 'react';
import { Text, View, TouchableWithoutFeedback, ScrollView, StyleSheet, Animated } from 'react-native';
import { LOREM_EPSUM } from '../../Helpers/loremEpsum';

const AnimatedEvent = ({
    params,
}) => {

    const [contentSize, setContextSize] = useState(null);

    const eventAnimation = useRef(new Animated.Value(0)).current;
    const trackValue = useRef(0);

    const bgInterpolate = eventAnimation.interpolate({
        // inputRange: [0, 3000],
        inputRange: [0, contentSize],
        outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],

    });

    const backgroundStyle = {
        backgroundColor: bgInterpolate,
    };

    const onContentSizeChange = (contentWidth, contentHeight) => {
        setContextSize(contentHeight);
    }

    return (
        <View style={styles.container}>
            <ScrollView
                scrollEventThrottle={15}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: eventAnimation } } }],
                    {
                        useNativeDriver: false
                    }
                    )}
                    onContentSizeChange={onContentSizeChange}
            >
                <Animated.View
                    style={[styles.content, backgroundStyle]}
                >

                    <Text style={styles.textStyle}>{LOREM_EPSUM}</Text>

                </Animated.View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        // height: 3000,
        // backgroundColor: 'pink',
    },
    textStyle: {
        fontSize: 30, marginHorizontal: 30,
    },
});

export default AnimatedEvent;
