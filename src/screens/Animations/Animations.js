import React from 'react';
import { Button, Text, View } from 'react-native';

const Animations = ({
    navigation,
    route
}) => {
    return (
        <View>

            <Button
                title={'Fade Animation'}
                onPress={() => {
                    navigation.navigate('fadeAnimation');
                }}
            />
            <Button
                title={'Scale Animation'}
                onPress={() => {
                    navigation.navigate('scaleAnimation');
                }}
            />
            <Button
                title={'Translate Animation'}
                onPress={() => {
                    navigation.navigate('translateAnimation');
                }}
            />
            <Button
                title={'Rotate Animation'}
                onPress={() => {
                    navigation.navigate('rotateAnimation');
                }}
            />
            <Button
                title={'Color Animation'}
                onPress={() => {
                    navigation.navigate('colorAnimation');
                }}
            />
            <Button
                title={'Sequence Animation'}
                onPress={() => {
                    navigation.navigate('sequenceAnimation');
                }}
            />
            <Button
                title={'Delay Animation'}
                onPress={() => {
                    navigation.navigate('delayAnimation');
                }}
            />
            <Button
                title={'Parallel Animation'}
                onPress={() => {
                    navigation.navigate('parallelAnimation');
                }}
            />
            <Button
                title={'Stagger Animation'}
                onPress={() => {
                    navigation.navigate('staggerAnimation');
                }}
            />

            {/* <Text>{'SOME KEY POINTS:'}</Text> */}
            {/* <Text>{' You can set useNativeDriver: true only in case of few styles like translate, scale, rotate, opacity but you can’t use native drivers for changing width and height of the components.'}</Text> */}
            <Button
                title={'DropDown Animation'}
                onPress={() => {
                    navigation.navigate('dropDownAnimation');
                }}
            />
            <Button
                title={'Header Scroll Animation'}
                onPress={() => {
                    navigation.navigate('headerScrollAnimation');
                }}
            />
            <Button
                title={'Swipable Gesture Animation'}
                onPress={() => {
                    navigation.navigate('swipableGestureAnimation');
                }}
            />
            <Button
                title={'Pan Gesture Animation'}
                onPress={() => {
                    navigation.navigate('draggable');
                }}
            />
            <Button
                title={'Bouncing Gesture Animation'}
                onPress={() => {
                    navigation.navigate('bouncingGestureAnimation');
                }}
            />
        </View>
    );
};

export default Animations;
