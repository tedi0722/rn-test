import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';


export default PlayerScreenSubHeader = (props) => {
  console.log(props)
  return (
    <View><Text>
      {this.props.name}
      {this.props.points}
    </Text></View>
  )
}