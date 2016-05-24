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
const detail_url = "http://i.jandan.net/?oxwlxojflwblxbsapi=get_post&include=content&id=";

import LoadingView from './LoadingView';

class NewsPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isloading:true,
      conent:null,
       
    };
  }

  componentDidMount(){
    this.fetchNewsData();
  }

  render() {
    if(this.state.isloading)return (<LoadingView/>);
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
                source={{html: this.state.content}}
                style={{margin:5}}
                />
      </View>
    );
  }

  backAndroid(){
       this.props.navigator.pop();
  }


   fetchNewsData(){
    fetch(detail_url+this.props.id)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          content:responseData.post.content,
          isloading: false,
         
        });
      })
      .done();
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

export default NewsPage;
