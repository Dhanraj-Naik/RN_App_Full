import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = ({
    params,
}) => {
    return (
        <View>
            <Text style={styles.textStyle}>ComponentsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
});

export default ComponentsScreen;
