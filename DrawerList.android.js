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
  TouchableHighlight,
} from 'react-native';

const NEWS = "新鲜事";
const TREE_NEW_BEE = "段子";
const PICTURES = "无聊图 ";
const GIRLS = "妹子图";
const VIDEOS = "小电影";
const SETTING = "设置";

class DrawerList extends Component {
  render() {
    return (
    <View style={{flex:1, backgroundColor: '#272822'}}>
      <View style={styles.container} {...this.props}>
        <TouchableHighlight  onPress={() => this.props.onItemSelected('freshNews')}>
         <View style={styles.itemView}>
            <Image
              source={require('./image/ic_explore_white_24dp.png')}
              style={styles.icon} />
            <Text style={styles.item}>
              {NEWS}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  onPress={() => this.props.onItemSelected('treeNewBee')}>
          <View style={styles.itemView}>
              <Image
                source={require('./image/ic_chat_white_24dp.png')}
                style={styles.icon} />
             <Text style={styles.item}>
             {TREE_NEW_BEE}
            </Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight  onPress={() => this.props.onItemSelected('pictures')}>
          <View style={styles.itemView}>
                <Image
                  source={require('./image/ic_mood_white_24dp.png')}
                  style={styles.icon} />
               <Text style={styles.item}>
                  {PICTURES}
                </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  onPress={() => this.props.onItemSelected('girls')}>
         <View style={styles.itemView}>
              <Image
                source={require('./image/ic_local_florist_white_24dp.png')}
                style={styles.icon} />
            <Text style={styles.item}>
                {GIRLS}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  onPress={() => this.props.onItemSelected('videos')}>
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
        <View style={{height: 40,backgroundColor:'#272822',marginBottom:20}}>
            <TouchableHighlight  onPress={() => this.props.onItemSelected('setting')}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#272822',
  },
  
  item: {
     fontSize: 18,
    textAlign: 'left',
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
      alignItems: 'center', 
      padding: 16
   }

});

 export default DrawerList;