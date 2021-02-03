import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, FlatList } from 'react-native';

const ColorsScreen = ({
    params,
}) => {

    const [colors, setColor] = useState([]);

    console.log(colors);

    return (
        <View style={styles.container}>
            <Button
                title={'Add a color'}
                onPress={() => {
                    setColor([...colors, { backgroundColor: randomRGB(), key: myId.next().value }]);
                }}
            />
            {/*  <ScrollView>
                <View>
                    {
                        colors.map(color => {
                            console.log('color: ', color);
                            return (
                                <View
                                    key={`${color.key}`}
                                    style={[styles.viewStyle, { backgroundColor: color.backgroundColor }]}
                                />
                            );
                        })}
                </View>
            </ScrollView> */}

            <FlatList
            keyExtractor={item => `${item.key}`}
                data={colors}
                renderItem={({index, item : { backgroundColor}}) => {
                    return (
                        <View
                            style={[styles.viewStyle, { backgroundColor }]}
                        />
                    );
                }}
                // keyExtractor={data => `${data.key}`}
            />
        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
};

function* idGenerator() {
    let id = 0;
    while (true) {
        ++id;
        yield id;
    }
}

const myId = idGenerator();

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    viewStyle: {
        width: 60,
        height: 60,
        marginBottom: 4,
        backgroundColor: 'rgb(206,111,230)',
    },
});

export default ColorsScreen;
