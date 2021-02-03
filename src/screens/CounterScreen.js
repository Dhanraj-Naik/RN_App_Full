import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = ({
    params,
}) => {
    let [counter, setCounter] = useState(0);

    return (
        <View style={styles.containerstyle}>
            <Button
                title={'INCREASE'}
                onPress={() => {
                    counter++;
                    setCounter(counter);
                }}
            />
            <Button
                title={'DECREASE'}
                onPress={() => {
                    counter--;
                    setCounter(counter);
                }}
            />
            <Text style={styles.textStyle}>Current Counter: </Text>
            <Text style={styles.textCounterStyle}>{counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerstyle: {
        padding: 20,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20
    },
    textCounterStyle: {
        fontSize: 25
    }
});

export default CounterScreen;
