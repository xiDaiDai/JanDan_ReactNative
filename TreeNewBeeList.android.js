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
  ToastAndroid,
  ProgressBarAndroid,
} from 'react-native';

import LoadingView from './LoadingView';
import NewsPage from './NewsPage';
 
 

const url = "http://jandan.net/?oxwlxojflwblxbsapi=jandan.get_duan_comments&page=";
 
let pageIndex = 1;
 
class TreeNewBeeList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        isRefreshing:false,
        dataSource:new ListView.DataSource({
          rowHasChanged:(row1,row2)=>row1!==row2,
        }),  
        loaded:false,
        loadMore: false,
        newContent:null,
    };
  }

  componentDidMount(){
    this.fetchNewsData();
  }

  render() {
     if(!this.state.loaded)return (<LoadingView/>);
    return (
      <View style={{flex:1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(newsItem)=>this.renderNewsItem(newsItem)}
          onEndReached={()=>this.loadmore()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={()=>this.onRefresh()}
              colors={['#272822']}/>}/>
      </View>
    );
  }

 

  renderNewsItem(newsItem){
    return(
      <TouchableHighlight 
            underlayColor='white'
           >
        <View style={{backgroundColor:'white',flexDirection:'column'}}>
          <View style={{ flexDirection :'row',padding:10,alignItems:'center'}}>          
                <Text style = {{fontSize:16,color:'#272822',paddingRight:10,fontWeight:'bold'}}>{newsItem.comment_author}</Text>
                <Text >{newsItem.comment_date}</Text>
          </View>    
          <View style={{justifyContent:'flex-start',paddingLeft:10,paddingRight:10}}>
                <Text style={{fontSize:15,color:'#272822',lineHeight:25}}>{newsItem.comment_content}</Text>
          </View> 
          <View style={{flexDirection :'row',padding:10}}>
                <View style={{flexDirection :'row'}}>
                  <Text style={{fontSize:15,paddingRight:15}}>OO {newsItem.vote_positive}</Text>
                  <Text style={{fontSize:15,paddingRight:15}}>XX {newsItem.vote_negative}</Text>
                  <Text style={{fontSize:15,paddingRight:15}}>吐槽 {newsItem.vote_positive}</Text>
                </View>
                
                <View style={{flex:1 ,alignItems:'flex-end'}}>
                 <Text style={{fontSize:15,fontWeight:'bold',justifyContent:'center'}}>. . .</Text>
                </View>
                
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
    pageIndex = 1,
    fetch(url+pageIndex)
      .then((response) => response.json())
      .then((responseData) => {
       
        this.setState({
          newContent:responseData.comments,
          dataSource:this.state.dataSource.cloneWithRows(responseData.comments),
          loaded: true,
          isRefreshing:false
        });
      })
      .done();
  }

  loadmore(){
     if(this.state.loadmore) return;
     this.setState({loadmore:true});

     fetch(url+pageIndex++)
      .then((response) => response.json())
      .then((responseData) => {
        
        this.setState({
          newContent:[...this.state.newContent, ...responseData.comments],
          dataSource:this.state.dataSource.cloneWithRows(this.state.newContent),
          loaded: true,
          isRefreshing:false,
          loadmore:false
        });
      })
      .done();
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
  thumbnail:{
        width:90,
        height:60,
    },
});

export default TreeNewBeeList;