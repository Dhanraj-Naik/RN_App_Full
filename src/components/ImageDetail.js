import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const ImageDetail = ({
    title,
    image,
}) => {
    return (
        <View style={styles.containerStyle}>
            <Image source={image} style={styles.imageStyle} />
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        marginBottom: 2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'black',
    },
    imageStyle: {
        width: 80,
        height: 80,
        backgroundColor: 'grey',
    },
    textStyle: {
        padding: 10
    }
});

export default ImageDetail;
