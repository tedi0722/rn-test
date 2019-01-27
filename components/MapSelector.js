import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native'
import map1bg from '../assets/img/map1.png'
import map2bg from '../assets/img/map2.png'

export default class MapSelector extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = 400;
    const resizeMode = 'center';



    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        // showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.contentContainer}
        alwaysBounceHorizontal={true}
      >
        <Image
          style={{
            flex: 1,
            // resizeMode,
            // position: 'absolute',
            // width: 100,
            // height: 100,
            // justifyContent: 'center',
          }}
          source={map1bg}
        />

        <Image
          style={{
            flex: 1,
            // resizeMode,
            // position: 'absolute',
            // width: 100,
            // height: 100,
            // justifyContent: 'center',
          }}
          source={map2bg}
        />


      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  }
});
