import React from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import DraggableBox from './component/DraggableBox';

const Draggable = ({
    params,
}) => {
    return (
        <>
        <DraggableBox />
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },

});

export default Draggable;
