/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ProgressBarAndroid,
  Text,
  View
} from 'react-native';

class LoadingView extends Component {
  render() {
    return (
     <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ProgressBarAndroid styleAttr="SmallInverse" color='#272822' />
        <Text style={{fontSize:13}}>
          数据加载中......
        </Text>
      </View>
    );
  }
}

 

export default LoadingView;
