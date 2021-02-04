import React, { useReducer } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    //state === { red: number,  green: number,  blue: number}
    //action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    //or
     //action === { type: 'change_red' || 'change_blue', payload: 15 || -15}

    switch (action.type) { //action.colorToChange
        case 'change_red':
            // console.log('red: ', state, action);
            if ((state.red + action.payload > 255) || (state.red + action.payload < 0)) {
                // console.log('red: 1 ', state, action);
                return state;
            }
            return { ...state, red: state.red + action.payload };
        case 'change_green':
            return ((state.green + action.payload) > 255
                || (state.green + action.payload) < 0) ?
                state : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return ((state.blue + action.payload) > 255
                || (state.blue + action.payload) < 0) ? state :
                { ...state, blue: state.blue + action.payload };

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
                // onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -COLOR_INCREMENT })}
            />
            <ColorCounter
                color={'Green'}
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -COLOR_INCREMENT })}
            />
            <ColorCounter
                color={'Blue'}
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -COLOR_INCREMENT })}
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
