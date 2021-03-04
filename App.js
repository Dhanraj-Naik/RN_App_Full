import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import SquareScreen from './src/screens/SquareScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import Animations from './src/screens/Animations/Animations';
import FadeAnimation from './src/screens/Animations/FadeAnimation';
import ScaleAnimation from './src/screens/Animations/ScaleAnimation';
import RotateAnimation from './src/screens/Animations/RotateAnimation';
import ColorAnimation from './src/screens/Animations/ColorAnimation';
import SequenceAnimation from './src/screens/Animations/SequenceAnimation';
import DelayAnimation from './src/screens/Animations/DelayAnimation';
import ParallelAnimation from './src/screens/Animations/ParallelAnimation';
import StaggerAnimation from './src/screens/Animations/StaggerAnimation';
import DropDownAnimation from './src/screens/Animations/DropDownAnimation';
import HeaderScrollAnimation from './src/screens/Animations/HeaderScrollAnimation';
import SwipableGestureAnimation from './src/screens/Animations/SwipableGestureAnimation';
import Draggable from './src/screens/Animations/Draggable';
import BouncingGestureAnimation from './src/screens/Animations/BouncingGestureAnimation';
import TranslateAnimation from './src/screens/Animations/TranslateAnimation';
import HeightTranslateAnimation from './src/screens/Animations/HeightTranslateAnimation';
import HeightTranslate2Animation from './src/screens/Animations/HeightTranslate2Animation';
import PercentageAnimation from './src/screens/Animations/PercentageAnimation';
import SpringAnimation from './src/screens/Animations/SpringAnimation';

const Stack = createStackNavigator();


const App = ({
  params,
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'homeScreen'}>
        <Stack.Screen
          name={'homeScreen'}
          component={HomeScreen}
        />
        <Stack.Screen
          name={'componentsScreen'}
          component={ComponentsScreen}
        />
        <Stack.Screen
          name={'listScreen'}
          component={ListScreen}
        />
        <Stack.Screen
          name={'imageScreen'}
          component={ImageScreen}
        />
        <Stack.Screen
          name={'counterScreen'}
          component={CounterScreen}
        />
        <Stack.Screen
          name={'colorsScreen'}
          component={ColorsScreen}

        />
        <Stack.Screen
          name={'squareScreen'}
          component={SquareScreen}
        />
        <Stack.Screen
          name={'textScreen'}
          component={TextScreen}
        />
        <Stack.Screen
          name={'boxScreen'}
          component={BoxScreen}
        />
        <Stack.Screen
          name={'animations'}
          component={Animations}
        />
        <Stack.Screen
          name={'fadeAnimation'}
          component={FadeAnimation}
        />
        <Stack.Screen
          name={'scaleAnimation'}
          component={ScaleAnimation}
        />
        <Stack.Screen
          name={'translateAnimation'}
          component={TranslateAnimation}
        />
        <Stack.Screen
          name={'heightTranslateAnimation'}
          component={HeightTranslateAnimation}
        />
        <Stack.Screen
          name={'heightTranslate2Animation'}
          component={HeightTranslate2Animation}
        />
        <Stack.Screen
          name={'percentageAnimation'}
          component={PercentageAnimation}
        />
        <Stack.Screen
          name={'rotateAnimation'}
          component={RotateAnimation}
        />
        <Stack.Screen
          name={'springAnimation'}
          component={SpringAnimation}
        />
        <Stack.Screen
          name={'colorAnimation'}
          component={ColorAnimation}
        />
        <Stack.Screen
          name={'sequenceAnimation'}
          component={SequenceAnimation}
        />

        <Stack.Screen
          name={'delayAnimation'}
          component={DelayAnimation}
        />
        <Stack.Screen
          name={'parallelAnimation'}
          component={ParallelAnimation}
        />
        <Stack.Screen
          name={'staggerAnimation'}
          component={StaggerAnimation}
        />
        <Stack.Screen
          name={'dropDownAnimation'}
          component={DropDownAnimation}
        />
        <Stack.Screen
          name={'headerScrollAnimation'}
          component={HeaderScrollAnimation}
        />
        <Stack.Screen
          name={'swipableGestureAnimation'}
          component={SwipableGestureAnimation}
        />
        <Stack.Screen
          name={'draggable'}
          component={Draggable}
        />
        <Stack.Screen
          name={'bouncingGestureAnimation'}
          component={BouncingGestureAnimation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
