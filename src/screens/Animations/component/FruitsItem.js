import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image, Animated, Easing } from 'react-native';

//ExpandableListViews || Accordion lists
const FruitsItem = ({
    title,
    children,
}) => {
    const rotateImg = useRef(new Animated.Value(0)).current;
    const trackRotation = useRef(0);
    const animateHeight = useRef(new Animated.Value(0)).current;
    const trackheight = useRef(0);

    const [itemHeight, setItemsHeight] = useState(0);

    const rotateIcon = () => {
        trackRotation.current = trackRotation.current === 0 ? 1 : 0;
        Animated.timing(rotateImg, {
            toValue: trackRotation.current,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }

    const animateDropDownItems = () => {
        trackheight.current = trackheight.current === 0 ? 1 : 0;
        Animated.timing(animateHeight, {
            toValue: trackheight.current,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const dropdownAnimation = () => {
        trackRotation.current = trackRotation.current === 0 ? 1 : 0;
        trackheight.current = trackheight.current === 0 ? 1 : 0;
        Animated.parallel([
            Animated.timing(rotateImg, {
                toValue: trackRotation.current,
                duration: 300,
                useNativeDriver: true,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1), //standard material design easing
            }),

            Animated.timing(animateHeight, {
                toValue: trackheight.current,
                duration: 300,
                useNativeDriver: false,
            }),
        ]).start();
    };

    const bodyHeight = animateHeight.interpolate({
        inputRange: [0, 1],
        outputRange: [0, itemHeight],
    });

    const arrowAngle = rotateImg.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    return (
        <>
            <TouchableWithoutFeedback onPress={dropdownAnimation}>
                <View style={styles.titleContainer}>
                    <Text>{title}</Text>
                    <Animated.Image
                        style={{
                            transform: [{
                                rotate: arrowAngle,
                            }],
                        }}
                        source={require('../../../../assets/icons/down.png')}
                    />
                </View>
            </TouchableWithoutFeedback>

            <Animated.View style={[styles.bodyBackground, {
                // height: 40,
                height: bodyHeight,
            }]}>
                <View
                    style={styles.bodyContainer}
                    onLayout={event => { setItemsHeight(event.nativeEvent.layout.height); }}
                >
                    {children}
                </View>
            </Animated.View>
        </>
    );
};

const styles = StyleSheet.create({
    titleBackground: {

    },
    bodyBackground: {
        backgroundColor: '#EFEFEF',
        overflow: 'hidden',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        // paddingLeft: 1.5,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EFEFEF',
        // backgroundColor: 'grey',
    },
    bodyContainer: {
        padding: 1,
        paddingLeft: 1.5,
        position: 'absolute',
        bottom: 0,
        borderColor: 'red',
        // borderBottomWidth: 1
    },
});

export default FruitsItem;
