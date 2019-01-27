import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ChooseMapScreen from './screens/ChooseMapScreen';
import LoadScreen from './screens/LoadScreen';
import SettingsScreen from './screens/SettingsScreen';
import ChooseTerrainScreen from './screens/ChooseTerrainScreen';
import PlayerOneScreen from './screens/PlayerOneScreen';
import PlayerTwoScreen from './screens/PlayerTwoScreen';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <MainNavigatorApp />
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  Create: ChooseMapScreen,
  Load: LoadScreen,
  Settings: SettingsScreen,
  Terrain: ChooseTerrainScreen,
  PlayerOne: PlayerOneScreen,
  PlayerTwo: PlayerTwoScreen
});



const MainNavigatorApp = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
