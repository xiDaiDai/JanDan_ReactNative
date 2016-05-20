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
  ListView,
  RefreshControl,
  TouchableHighlight,
  ProgressBarAndroid,
} from 'react-native';

const url = "http://jandan.net/?oxwlxojflwblxbsapi=get_recent_posts&include=url,date,title,custom_fields&custom_fields=thumb_c,views&dev=1&page=";
const detail_url = "http://i.jandan.net/?oxwlxojflwblxbsapi=get_post&include=content&id=";
 
class NewsList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        isRefreshing:false,
        dataSource:new ListView.DataSource({
          rowHasChanged:(row1,row2)=>row1!==row2,
        }),  
        loaded:false
    };
  }

  componentDidMount(){
    this.fetchNewsData();
  }

  render() {
     if(!this.state.loaded){
       return this.renderLoadingView();
    }

    return (
      <View style={{flex:1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(newsItem)=>this.renderNewsItem(newsItem)}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={()=>this.onRefresh()}
              tintColor="#ff0000"
              title="Loading..."
              colors={['#272822']}/>}/>
      </View>
    );
  }

 

  renderNewsItem(newsItem){
    return(
      <TouchableHighlight>
        <View style={{backgroundColor:'white',flexDirection:'column'}}>
          <View style={{justifyContent:'center', flexDirection :'row',padding:10}}>          
               <View style= {styles.leftContainer}>
                  <Text style = {{fontSize:15,color:'#272822'}}>
                    {newsItem.title}
                  </Text>
                  <View style = {{flex:1,justifyContent:'flex-end'}} >
                    <Text >
                      {newsItem.date}
                    </Text>
                  </View>                   
               </View>
               <Image
                  style = {styles.thumbnail}
                  source={{uri:newsItem.custom_fields.thumb_c[0]}}/>
          </View>          
          <View style={{backgroundColor:'#d8d8d8',height:1,flexDirection: 'row'}}/>
        </View>
      </TouchableHighlight>
  
    );

  
  }

  onRefresh(){
      this.setState({isRefreshing: true,});
      this.fetchNewsData();
  }


  fetchNewsData(){
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(responseData.posts),
          loaded: true,
          isRefreshing:false
        });
      })
      .done();
  }


   renderLoadingView(){
    return(
      <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ProgressBarAndroid styleAttr="SmallInverse" color='#272822' />
        <Text>
          数据加载中......
        </Text>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    
    
    justifyContent:'center',
    flexDirection :'row', 
   
  },
  leftContainer:{
    height:60,
    flexDirection :'column', 
    flex: 1,  
    marginRight: 5,
    backgroundColor: 'white',
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

  thumbnail:{
        width:90,
        height:60,
    },
});

export default NewsList;