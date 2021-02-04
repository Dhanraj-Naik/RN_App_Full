import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const ColorCounter = ({
    color,
    changedValue,
    defaultValue,
    onIncrease,
    onDecrease,
}) => {

    return (
        <View style={styles.container}>
            <Text>{color}</Text>
            <Button
                title={`More ${color}`}
                // onPress={() => {
                //     if (defaultValue < 255) {
                //         changedValue(defaultValue + 5);
                //         // changedValue(++defaultValue);
                //     }
                // }}
                color='black'
                onPress={() => onIncrease()}
            />
            <Button
                title={`Less ${color}`}
                // onPress={() => {
                //     if (defaultValue > 0) {
                //         changedValue(defaultValue - 5);
                //         // changedValue(--defaultValue);
                //     }
                // }}
                color='black'
                onPress={() => onDecrease()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        // backgroundColor: 'orange',
    },
    textStyle: {

    },
});

export default ColorCounter;
