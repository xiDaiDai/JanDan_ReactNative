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
  ToolbarAndroid
} from 'react-native';

import LoadingView from './LoadingView';

class VideoPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isloading:true,
    };
  }

  render() {
  	 
    
    return (
      <View style={styles.container}>
      <ToolbarAndroid
                style={styles.toolBar}
                navIcon={require('./image/ic_arrow_back_white_18dp.png')}
                title={this.props.title}
                titleColor='white'
                onIconClicked={() => this.backAndroid()}/>
                <WebView javaScriptEnabled={true}
                automaticallyAdjustContentInsets={true}
                startInLoadingState={true}
                source={{uri: this.props.url}}
                style={{margin:5}}>
                </WebView>
      </View>
    );
  }

  backAndroid(){
       this.props.navigator.pop();
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
   toolBar: {
    backgroundColor: '#232320',
    height: 50,
  },
   
});

export default VideoPage;
