import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const ColorCounter = ({
    color,
    onIncrease,
    onDecrease,
}) => {

    return (
        <View style={styles.container}>
            <Text>{color}</Text>
            <Button
                title={`More ${color}`}
                color='black'
                onPress={() => onIncrease()}
            />
            <Button
                title={`Less ${color}`}
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
