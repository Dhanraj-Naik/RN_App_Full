import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const HomeScreen = ({
  navigation,
  route,
}) => {
  return (<View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      title={'Go to component demo'}
      onPress={() => navigation.navigate('componentsScreen')}
    />
    <Button
      title={'Go to List demo'}
      onPress={() => navigation.navigate('listScreen')}
    />
    <Button
      title={'Go to Image demo'}
      onPress={() => navigation.navigate('imageScreen')}
    />
    <Button
      title={'Go to CounterScreen demo'}
      onPress={() => navigation.navigate('counterScreen')}
    />
    <Button
      title={'Go to ColorsScreen demo'}
      onPress={() => navigation.navigate('colorsScreen')}
    />
    <Button
      title={'Go to SquareScreen demo'}
      onPress={() => navigation.navigate('squareScreen')}
    />
    <Button
      title={'Go to TextScreen demo'}
      onPress={() => navigation.navigate('textScreen')}
    />
  </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
