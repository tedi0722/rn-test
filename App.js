import React from 'react';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import LoadScreen from './screens/LoadScreen';
import SettingsScreen from './screens/SettingsScreen';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  Create: CreateScreen,
  Load: LoadScreen,
  Settings: SettingsScreen
});

// const MainNavigatorApp = createAppNavigator(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
