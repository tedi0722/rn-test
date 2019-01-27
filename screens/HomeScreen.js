import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import HomeScreenButton from '../components/HomeScreenButton';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Battle-Tactics',
  };

  constructor(props) {
    super(props)
    this.state = {
      playerOne: {
        name: 'Jack',
        mapName: '',
        terrain: [],
        units: [],
        faction: '',
        points: 0,
        randomStart: "false"
      },

      playerTwo: {
        name: 'Jill',
        mapName: '',
        terrain: [],
        units: [],
        faction: '',
        points: 0,
        randomStart: "false"
      }

    }
  }


  render() {
    // const { navigate } = this.props.navigation;


    return (
      <View>
        <Text>This is the home screen</Text>

        <HomeScreenButton title='Create' />
        <HomeScreenButton title='Load' />
        <HomeScreenButton title='Settings' />

      </View>
    );

  }
}

const styles = StyleSheet.create({})
