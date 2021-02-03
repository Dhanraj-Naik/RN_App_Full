import React from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet } from 'react-native';

const ListScreen = ({
    params,
}) => {

    const friends = [
        {
            name: 'Friend #1',
            // key: '1',
            age: 21,
        },
        {
            name: 'Friend #2',
            // key: '2',
            age: 33,
        },
        {
            name: 'Friend #3',
            // key: '3',
            age: 18,
        },
        {
            name: 'Friend #4',
            // key: '4',
            age: 28,
        },
        {
            name: 'Friend #5',
            // key: '5',
            age: 42,
        },
    ];

    return (
        <FlatList
            data={friends}
            renderItem={({ index, item : { name, age } }) => { //item
                // console.log(item);
                // const { name } = item;
                return <Text style={styles.textStyle}>{name} has age {age}</Text>;
            }}
            keyExtractor={(friend) => friend.name}
            showsVerticalScrollIndicator={false}
            horizontal={false}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 100,
    }
});

export default ListScreen;
