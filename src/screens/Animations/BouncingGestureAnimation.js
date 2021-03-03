import React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import Snappable from './component/Snappable';
import Twistable from './component/Twistable';

const BouncingGestureAnimation = ({
    params,
}) => {
    return (
        <View style={styles.container}>
            <Snappable>
                <Twistable>
                    <View style={styles.box} />
                </Twistable>
                 {/* <View style={styles.box} /> */}
            </Snappable>
        </View>
    );
};

const BOX_SIZE = 200;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    box: {
        width: BOX_SIZE,
        height: BOX_SIZE,
        borderColor: '#F5FCFF',
        alignSelf: 'center',
        backgroundColor: 'plum',
        margin: BOX_SIZE / 2,
    },
});

export default BouncingGestureAnimation;
