import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    //state === { counter : number}
    //action === { type === 'increase_value' || 'decrease_value', payload : 15 || -15}
    switch (action.type) {
        case 'increase_value':
            return { ...state, counter: state.counter + action.payload };
        case 'decrease_value':
            return { ...state, counter: state.counter + action.payload };

        default:
            state;
    }
};

const CounterScreen = ({
    params,
}) => {

    const [state, dispatch] = useReducer(reducer, { counter : 0});

    return (
        <View style={styles.containerstyle}>
            <Button
                title={'INCREASE'}
                onPress={() => {
                    dispatch({ type: 'increase_value', payload: 1 });
                }}
            />
            <Button
                title={'DECREASE'}
                onPress={() => {
                    dispatch({ type: 'decrease_value', payload: -1 });
                }}
            />
            <Text style={styles.textStyle}>Current Counter: </Text>
            <Text style={styles.textCounterStyle}>{state.counter}</Text>
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
