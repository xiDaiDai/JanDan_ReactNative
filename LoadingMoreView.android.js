/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid
} from 'react-native';

class LoadingMoreView extends Component {
  render() {
    return (
      <View style={{height:50,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
      <ProgressBarAndroid styleAttr="SmallInverse" color='#272822' />
      <Text style={{fontSize:13,color:'#272822',marginLeft:10}}>正在加载......</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default LoadingMoreView;
