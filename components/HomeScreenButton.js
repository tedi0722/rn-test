import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';


class HomeScreenButton extends React.Component {
  render() {
    return (
      <Button
        title={this.props.title}
        onPress={() => { this.props.navigation.navigate(this.props.title) }}
      />
    )
  }
}

export default withNavigation(HomeScreenButton);