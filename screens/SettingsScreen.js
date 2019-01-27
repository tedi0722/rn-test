import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import RandomStart from '../components/RandomStart'

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings Screen',
  };

  render(props) {
    console.log(props)

    return (
      <View>
        <Text>This is the Screen screen</Text>

        <Button
          title="Player One"
          onPress={() => { this.props.navigation.navigate("PlayerOne") }}
        />

        <Button
          title="Player Two"
          onPress={() => { this.props.navigation.navigate("PlayerTwo") }}
        />

        {/* <RandomStart random={this.props.randomStart} /> */}


      </View>
    );

  }
}

const styles = StyleSheet.create({})
