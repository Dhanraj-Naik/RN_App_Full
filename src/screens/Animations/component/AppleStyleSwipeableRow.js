import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const AppleStyleSwipeableRow = ({
    children,
}) => {

    const swipeableRow = useRef();

    const close = () => {
        swipeableRow.current.close();
    };


    const renderLeftActions = (progress, dragX) => { //progress, dragX
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
            // extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity style={styles.leftAction}
                onPress={close}
            >
                <Animated.Text
                    style={[
                        styles.actionText,
                        {
                            transform: [{
                                // translateX: 0
                                translateX: trans,
                            }],
                        },
                    ]}
                >
                    Archive
            </Animated.Text>
            </TouchableOpacity>
        );
    };

    const renderRightAction = (text, color, x, progress) => {
        // console.log('renderRightAction: ', text, x, progress);
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
            extrapolate: 'clamp',
        });
        const pressHandler = () => {
            close();
            alert(text);
        };
        return (
            <Animated.View style={{
                flex: 1,
                transform: [{
                    // translateX: 0
                    translateX: trans,
                }],
            }}
            >
                <TouchableOpacity
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}
                >
                    <Text style={styles.actionText}>{text}</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    };

    const renderRightActions = progress => {
        console.log('renderRightActions: ', progress);
        return ( //progress, dragX
            <View style={{ width: 192, flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
                {renderRightAction('More', '#C8C7CD', 192, progress)}
                {renderRightAction('Flag', '#ffab00', 128, progress)}
                {renderRightAction('More', '#dd2c00', 64, progress)}
            </View>
        );
    }

    return (
        <Swipeable
            ref={swipeableRow}
            friction={2}
            leftThreshold={80}
            rightThreshold={41}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}
            >
            {children}
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#497AFC',
        justifyContent: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

export default AppleStyleSwipeableRow;
