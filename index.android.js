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
  Navigator
} from 'react-native';

import Splash from './Splash';
import FreshNews from './FreshNews';

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
}

 
  renderScene(route, navigator){
             
      if(route.name == 'freshNews'){
        return <FreshNews navigator={navigator} route={route} />
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
