/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Platform,
  BackAndroid,
} from 'react-native';

import Splash from './Splash';
import FreshNews from './FreshNews';
import NewsPage from './NewsPage';

let nav;

class JanDan_ReactNative extends Component {

constructor(props) {
  super(props);

  this.state = {
    splashed:false,
  };
}

componentDidMount(){
     setTimeout(()=>{this.setState({splashed:true});
                      },4000);
     if (Platform.OS === 'android') {
        BackAndroid.addEventListener('hardwareBackPress',()=>this.onBackAndroid());
    };
}


  onBackAndroid(){
    let routers = this.nav.getCurrentRoutes();
    if (this.nav&&routers.length > 1) {
        this.nav.pop();
        return true;
      }
        return false;
  } 
 
  renderScene(route, navigator){
      this.nav = navigator;
      switch(route.name){
        case 'freshNews':
           return <FreshNews navigator={navigator} route={route} />
           break;
        case 'NewsPage':
          return <NewsPage navigator={navigator} route={route} {...route.params}/>
        break;
       }
      
    }

  render() {
      if(this.state.splashed){
        let initialRoute = {name:'freshNews'}
        return (
              <Navigator
              style={styles.container}
              initialRoute={initialRoute}
              configureScene={() => Navigator.SceneConfigs.FadeAndroid}
              renderScene={(route,navigator)=>this.renderScene(route,navigator)}/>
          
              );
      }else{
          return (
                <View style={styles.container}>
                   <Splash/>
                </View>);
      }
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
     
  },
  
});

AppRegistry.registerComponent('JanDan_ReactNative', () => JanDan_ReactNative);
