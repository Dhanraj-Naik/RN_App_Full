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
import ColorsScreen from './src/screens/ColorsScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
