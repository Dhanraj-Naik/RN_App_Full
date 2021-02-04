import React, { useReducer } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    //state === { red: number,  green: number,  blue: number}
    //action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}

    switch (action.colorToChange) {
        case 'red':
            // console.log('red: ', state, action);
            if ((state.red + action.amount > 255) || (state.red + action.amount < 0)) {
                // console.log('red: 1 ', state, action);
                return state;
            }
            return { ...state, red: state.red + action.amount };
        case 'green':
            return ((state.green + action.amount) > 255
                || (state.green + action.amount) < 0) ?
                state : { ...state, green: state.green + action.amount };
        case 'blue':
            return ((state.blue + action.amount) > 255
                || (state.blue + action.amount) < 0) ? state :
                { ...state, blue: state.blue + action.amount };

        default:
            return state;
    }
};

const SquareScreen = ({
    params,
}) => {
    console.log('SquareScreen');
    //const [currentState, runMyReducer] = useReducer(reducer, initialState);
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View style={styles.container}>
            <ColorCounter
                color={'Red'}
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -COLOR_INCREMENT })}
            />
            <ColorCounter
                color={'Green'}
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -COLOR_INCREMENT })}
            />
            <ColorCounter
                color={'Blue'}
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -COLOR_INCREMENT })}
            />


            <View style={[styles.viewStyle,
            { backgroundColor: `rgb(${red},${green},${blue})` }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textStyle: {

    },
    viewStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
    },
});

export default SquareScreen;
