import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PlayerScreenSubHeader from '../components/PlayerScreenSubHeader'

export default class PlayerTwoScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Jill'
    }
  }


  render() {
    return (
      <View>
        <PlayerScreenSubHeader name={this.state.name} />
      </View>
    )
  }
}

const styles = StyleSheet.create({})