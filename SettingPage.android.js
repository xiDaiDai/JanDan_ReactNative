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
  Image,
  View
} from 'react-native';

class SettingPage extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
        <Image style={{width:100,height:100}} source={require('./image/ic_launcher.png')}/>
        
        <Text style={{fontSize:20 ,fontWeight:'bold',color:'#272822'}}>ReactNativeJanDan</Text>
        
        <View style={{margin:10,backgroundColor:'#272822',borderRadius: 4,padding:10}}>
          <Text style={{color:'white',fontSize:16}}>煎蛋ReactNative版android客户端</Text>
          <Text style={{color:'white',fontSize:16}}>相关内容来源:</Text>
          <Text style={{color:'white',fontSize:16}}>煎蛋www.jandan.net</Text>
          <Text style={{color:'white',fontSize:16}}>赵凯强 http://blog.csdn.net/zhaokaiqiang1992/article/details/45038125</Text>
          <Text style={{color:'white',fontSize:16}}>煎蛋的开发者DanielWangDev http://m.weibo.cn/u/1749949233</Text>
        </View>
        
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

export default SettingPage;
