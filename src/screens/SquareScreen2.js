import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

//USING useState to handle state
const SquareScreen2 = ({
    params,
}) => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                (red + change > 255) || (red + change < 0) ? null : setRed(red + change);
                return;
            case 'green':
                (green + change > 255) || (green + change < 0) ? null : setGreen(green + change);
                return;
            case 'blue':
                (blue + change > 255) || (blue + change < 0) ? null : setBlue(blue + change);
                return;
        }
    };

    console.log('SquareScreen:', 'rgb(', red, ',', green, ',', blue, ')');

    return (
        <View style={styles.container}>
            <ColorCounter
                defaultValue={red}
                color={'Red'}
                // changedValue={(value) => setRed(value)}

                // onIncrease={() => {
                // if (red + COLOR_INCREMENT > 255) {
                //     return;
                // }
                //     setRed(red + COLOR_INCREMENT);
                // }}
                // onDecrease={() => {
                //     if (red - COLOR_INCREMENT < 0) {
                //         return;
                //     }
                //     setRed(red - COLOR_INCREMENT);
                // }}

                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -COLOR_INCREMENT)}
            />
            <ColorCounter
                defaultValue={green}
                color={'Green'}
                // changedValue={(value) => setGreen(value)}

                // onIncrease={() => {
                //     if (green + COLOR_INCREMENT > 255) {
                //         return;
                //     }
                //     setGreen(green + COLOR_INCREMENT);
                // }}
                // onDecrease={() => {
                //     if (green - COLOR_INCREMENT < 0) {
                //         return;
                //     }
                //     setGreen(green - COLOR_INCREMENT);
                // }}

                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -COLOR_INCREMENT)}
            />
            <ColorCounter
                defaultValue={blue}
                color={'Blue'}
                // changedValue={(value) => setBlue(value)}

                // onIncrease={() => {
                //     if (blue + COLOR_INCREMENT > 255) {
                //         return;
                //     }
                //     setBlue(blue + COLOR_INCREMENT);
                // }}
                // onDecrease={() => {
                //     if (blue - COLOR_INCREMENT < 0) {
                //         return;
                //     }
                //     setBlue(blue - COLOR_INCREMENT);
                // }}

                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -COLOR_INCREMENT)}
            />


            <View style={[styles.viewStyle,
            { backgroundColor: `rgb(${red},${green},${blue})` }]} />
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

export default SquareScreen2;
