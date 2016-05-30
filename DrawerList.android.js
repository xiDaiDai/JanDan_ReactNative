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
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

const NEWS = "新鲜事";
const TREE_NEW_BEE = "段子";
const PICTURES = "无聊图 ";
const GIRLS = "妹子图";
const VIDEOS = "小电影";
const SETTING = "设置";
const TEST = "背景图";

const WINDOW_WIDTH = Dimensions.get('window').width;
const DRAWER_ALIGN_RIGHT= 100;

class DrawerList extends Component {
  render() {
    return (
    <View style={{backgroundColor: '#272822',flexDirection: 'column',flex:1}}>
      <View style={styles.container} {...this.props}>
        <TouchableHighlight  onPress={() => this.props.onItemSelected('freshNews')} underlayColor='#272822'>
         <View style={styles.itemView}>
            <Image
              source={require('./image/ic_explore_white_24dp.png')}
              style={styles.icon} />
            <Text style={styles.item}>
              {NEWS}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  onPress={() => this.props.onItemSelected('treeNewBee')} underlayColor='#272822'>
          <View style={styles.itemView}>
              <Image
                source={require('./image/ic_chat_white_24dp.png')}
                style={styles.icon} />
             <Text style={styles.item}>
             {TREE_NEW_BEE}
            </Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight  onPress={() => this.props.onItemSelected('pictures') } underlayColor='#272822'>
          <View style={styles.itemView}>
                <Image
                  source={require('./image/ic_mood_white_24dp.png')}
                  style={styles.icon} />
               <Text style={styles.item}>
                  {PICTURES}
                </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  onPress={() => this.props.onItemSelected('girls')} underlayColor='#272822'>
         <View style={styles.itemView}>
              <Image
                source={require('./image/ic_local_florist_white_24dp.png')}
                style={styles.icon} />
            <Text style={styles.item}>
                {GIRLS}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  onPress={() => this.props.onItemSelected('videos')}  underlayColor='#272822'>
           <View style={styles.itemView}>
                <Image
                  source={require('./image/ic_movie_white_24dp.png')}
                  style={styles.icon} />
               <Text style={styles.item}>
                  {VIDEOS}
               </Text>
          </View>
        </TouchableHighlight>
        
      </View>
      <View style={{flex:1,backgroundColor:'#272822'}}></View>
        <View style={{height: 40,backgroundColor:'#272822',marginBottom:20}}>
            <TouchableHighlight  onPress={() => this.props.onItemSelected('setting')} underlayColor='#272822'> 
               <View style={styles.itemView}>
                    <Image
                      source={require('./image/ic_settings_white_24dp.png')}
                      style={styles.icon} />
                   <Text style={styles.item}>
                      {SETTING}
                   </Text>
              </View>
          </TouchableHighlight>
        </View>
    </View>
    );
  }
}


 // <TouchableHighlight  onPress={() => this.props.onItemSelected('test')}  underlayColor='#272822'>
 //           <View style={styles.itemView}>
 //                <Image
 //                  source={require('./image/ic_movie_white_24dp.png')}
 //                  style={styles.icon} />
 //               <Text style={styles.item}>
 //                  {TEST}
 //               </Text>
 //          </View>
 //        </TouchableHighlight>

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272822'
  },
  
  item: {
    fontSize: 18,
    textAlign: 'right',
    color: '#ffffff',
     
  },

   icon:{
      width: 24, 
      height: 24, 
      marginLeft: 10, 
      marginRight: 16
   },

   itemView:{
      
      flexDirection: 'row', 
      padding: 16
      
   }

});

 export default DrawerList;