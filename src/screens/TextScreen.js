import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, } from 'react-native';

const TextScreen = ({
    params,
}) => {

    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
            <Text>Enter Password</Text>
            <TextInput
                style={styles.textInputStyle}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={value}
                placeholder={'Enter Password'}
                // keyboardType={'visible-password'}
                secureTextEntry={true}
                returnKeyType={'done'}
                onChangeText={(text) => setValue(text)}
                onEndEditing={() => {
                    console.log('onEndEditing');
                }}
                onSubmitEditing={() => {
                    console.log('onSubmitEditing');
                }}
            />

            { value.length <= 5 ?
                <Text style={styles.textStyle}>Password must be longer then 5 characters</Text>
                : null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textStyle: {
        marginVertical: 15,
    },
    textInputStyle: {
        height: 40,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 1,
        borderWidth: 2,
        borderColor: 'grey',
        paddingHorizontal: 4,
    },
});

export default TextScreen;
