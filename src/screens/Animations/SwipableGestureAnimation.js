import React from 'react';
import { Text, View, StyleSheet, FlatList as List, Animated, TouchableOpacity } from 'react-native';
import { Swipeable, RectButton, FlatList } from 'react-native-gesture-handler';
import { DATA } from '../../Helpers/swipableData';
import AppleStyleSwipeableRow from './component/AppleStyleSwipeableRow';
import GmailStyleSwipeableRow from './component/GmailStyleSwipeableRow';

const Row = ({ item }) => (
    <RectButton style={styles.rectButton} onPress={() => alert(item.from)}>
        <Text style={styles.fromText}>{item.from}</Text>
        <Text numberOfLines={2} style={styles.messageText}>
            {item.message}
        </Text>
        <Text style={styles.dateText}>
            {item.when} {'❭'}
        </Text>
    </RectButton>
);

const SwipeableRow = ({ item, index }) => {

    if (index % 2 === 0) {
        return (
            <AppleStyleSwipeableRow>
                <Row item={item} />
            </AppleStyleSwipeableRow>
        );
    } else {
        return (
            <GmailStyleSwipeableRow>
                <Row item={item} />
            </GmailStyleSwipeableRow>
        );
    }
};

const SwipableGestureAnimation = ({
    params,
}) => {
    return (
        <View>
            <FlatList
                data={DATA}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item, index }) => (
                    <SwipeableRow item={item} index={index} />
                )}
                keyExtractor={(item, index) => `message ${index}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    rectButton: {
        flex: 1,
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    separator: {
        backgroundColor: 'rgb(200, 199, 204)',
        height: StyleSheet.hairlineWidth,
    },
    fromText: {
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    messageText: {
        color: '#999',
        backgroundColor: 'transparent',
    },
    dateText: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 20,
        top: 10,
        color: '#999',
        fontWeight: 'bold',
    },
});

export default SwipableGestureAnimation;
