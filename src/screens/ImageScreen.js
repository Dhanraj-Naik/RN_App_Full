import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ({
    params,
}) => (
    <View style={styles.containerStyle}>
        <ImageDetail
            title={'Forest'}
            image={require('../../assets/images/forest.jpg')}
        />
        <ImageDetail
            title={'Beach'}
            image={require('../../assets/images/beach.jpg')}
        />
        <ImageDetail
            title={'Mountain'}
            image={require('../../assets/images/mountain.jpg')}
        />
    </View>
);

const styles = StyleSheet.create({
    containerStyle: {
        margin: 4,
    },
});

export default ImageScreen;
