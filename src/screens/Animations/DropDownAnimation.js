import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FruitsItem from './component/FruitsItem';

const DropDownAnimation = ({
    params,
}) => (
    <View>
        <FruitsItem title={'FRUITS'} >
            <Text>{'APPLE'}</Text>
            <Text>{'BANANA'}</Text>
            <Text>{'GRAPES'}</Text>
        </FruitsItem>
    </View>
);

const styles = StyleSheet.create({

});

export default DropDownAnimation;
