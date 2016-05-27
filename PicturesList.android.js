
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
  Dimensions
} from 'react-native';

import LoadingView from './LoadingView';
import NewsPage from './NewsPage';
import LoadingMoreView from './LoadingMoreView';
const WINDOW_WIDTH = Dimensions.get('window').width;


const url = "http://jandan.net/?oxwlxojflwblxbsapi=jandan.get_pic_comments&page=";
 
let pageIndex = 1;
class PicturesList extends Component {
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
          onEndReachedThreshold={30}
          renderFooter={()=>this.renderFooter()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={()=>this.onRefresh()}
              colors={['#272822']}/>}/>
      </View>
    );
  }

 renderFooter(){
    return(this.state.loadmore?<LoadingMoreView/>:null);
    
  }

  renderNewsItem(newsItem){
    // let imageContent = this.state.isImageLoaded?null:(<ProgressBarAndroid styleAttr="Inverse" color='#272822' />);
   return(
      <TouchableHighlight 
            underlayColor='white'
           >
        <View style={{backgroundColor:'white',flexDirection:'column',marginTop:10,marginLeft:10,marginRight:10,borderRadius:5,borderWidth:0.5,borderColor:'#A8AFB3'}}>
          <View style={{ flexDirection :'row',padding:10,alignItems:'center'}}>          
                <Text style = {{fontSize:16,color:'#272822',paddingRight:10,fontWeight:'bold'}}>{newsItem.comment_author}</Text>
                <Text >{newsItem.comment_date}</Text>
          </View>    
          <View style={{paddingLeft:10,paddingRight:10}}>
                <Image  
                        source={{uri:newsItem.pics[0]}} 
                        style={{width:WINDOW_WIDTH-40,height:300,justifyContent:'center'}}>
                </Image>
                
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
      }).catch((err)=>{ToastAndroid.show(err.message,1000)})
      .done();
  }

  loadmore(){
     if(this.state.loadmore) return;
     this.setState({loadmore:true});
     pageIndex++;
     fetch(url+pageIndex)
      .then((response) => response.json())
      .then((responseData) => {
        
        this.setState({
          newContent:[...this.state.newContent, ...responseData.comments],
          dataSource:this.state.dataSource.cloneWithRows(this.state.newContent),
          loaded: true,
          isRefreshing:false,
          loadmore:false
        });
      }).catch((err)=>{ToastAndroid.show(err.message,1000)})
      .done();
  }


  pressRow(url){
        this.props.navigator.push({
             title:'NewsPage',
             name:'NewsPage',
             params:{url:url}
              
            });
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

export default PicturesList;