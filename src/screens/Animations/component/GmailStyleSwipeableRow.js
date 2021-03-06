//GmailStyleSwipeableRow
import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager, Image } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

const AnimatedIcon = Animated.createAnimatedComponent(Image);

const GmailStyleSwipeableRow = ({
    children,
}) => {

    const swipeableRow = useRef();

    const close = () => {
        swipeableRow.current.close();
    };


    const renderLeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 80],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <RectButton style={styles.leftAction} onPress={close}>
                {/* <AnimatedIcon
                    name='archive'
                    size={30}
                    color='#fff'
                    style={[styles.actionIcon]}
                /> */}
                <AnimatedIcon
                    source={require('../../../../assets/icons/archive.png')}
                    style={[styles.actionIcon]}
                />
            </RectButton>
        );
    };

    const renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-80, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <RectButton style={styles.rightAction} onPress={close}>
                {/* <AnimatedIcon
                    name='delete-forever'
                    size={30}
                    color='#fff'
                    style={[styles.actionIcon]}
                /> */}
                <AnimatedIcon
                    source={require('../../../../assets/icons/delete_bin.png')}
                    style={[styles.actionIcon]}
                />
            </RectButton>
        );
    };

    return (
        <Swipeable
            ref={swipeableRow}
            friction={2}
            leftThreshold={80}
            rightThreshold={41}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}>
            {children}
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#388e3c',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse'
    },
    actionIcon: {
        width: 30,
        marginHorizontal: 10
    },
    rightAction: {
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        backgroundColor: '#dd2c00',
        flex: 1,
        justifyContent: 'flex-end'
    }
});

export default GmailStyleSwipeableRow;

