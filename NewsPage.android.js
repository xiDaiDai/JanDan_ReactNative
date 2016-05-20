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
  WebView,
  View,
  ToastAndroid,
} from 'react-native';

import LoadingView from './LoadingView';

class NewsPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isloading:false,
    };
  }
  render() {
    return (

      <View style={styles.container}>
       <WebView
          startInLoadingState={true}
          javaScriptEnabled={true}
          source={{uri: this.props.url}}/>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#ffffff',
  },
   
});

export default NewsPage;
