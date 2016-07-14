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
  Dimensions,
  TouchableHighlight,
  TimePickerAndroid,
  ToastAndroid,
  Alert,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';
import ViewPager from 'react-native-viewpager';

const  WINDOW_HEIGHT = Dimensions.get('window').height;
const  WINDOW_WIDTH = Dimensions.get('window').width;

class TestPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dataSource: new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2,})
    };
  }

  componentDidMount(){
    this.setState({
      dataSource:this.state.dataSource.cloneWithPages([
        'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
        'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
        'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
        'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
        
        ])
    });
  }

/*'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
  'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
  'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'*/
  render() {
    return (
      <View style={{flex:3}}>
      <View style={{height:200 , flex:1}}>
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} showsPagination={true} >
      <Image style={styles.slide1} 
      source={{uri:'http://pic.58pic.com/58pic/12/64/27/55U58PICrdX.jpg'}}
      resizeMode={Image.resizeMode.stretch}
      ></Image>
      
      <Image style={styles.slide2} 
      source={{uri:'http://pic30.nipic.com/20130626/8174275_085522448172_2.jpg'}}
      resizeMode={Image.resizeMode.stretch}
      ></Image>
      
      <Image style={styles.slide3} 
      source={{uri:'http://img.taodiantong.cn/v55183/infoimg/2013-07/130720115322ky.jpg'}}
      resizeMode={Image.resizeMode.stretch}
      ></Image>
      
      </Swiper>
      </View>
      <ViewPager
      style={{height:200,width:WINDOW_WIDTH, flex:1}}
      dataSource={this.state.dataSource}
      renderPage={(data,pageID)=>this._renderPage(data,pageID)}
      isLoop={true}
      autoPlay={true}/>
      <Image source={{uri:'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'}} style={{height:200,width:WINDOW_WIDTH, flex:1,}}>
      
      <View style={styles.container}>
      <Text style={styles.welcome}>
      React Native background image!
      </Text>
      <TouchableHighlight  onPress={() => this.showTimePicker()}  underlayColor='transparent'>
      <Text style={styles.instructions} >
      AndroidTimePicker
      </Text>
      </TouchableHighlight>
      <TouchableHighlight  onPress={() => this.showDialog()}  underlayColor='transparent'>
      <Text style={styles.instructions}>
      Dialog
      </Text>
      </TouchableHighlight>
      </View>
      </Image>
      </View>
      );
}

showTimePicker(){
  try {
    const {action, hour, minute} =   TimePickerAndroid.open({
      hour: 14,
      minute: 0,
            is24Hour: false, // Will display '2 PM'
          });
    if (action == TimePickerAndroid.timeSetAction) {
     ToastAndroid.show(hour,1000);
   }
 } catch ({code, message}) {
  console.warn('Cannot open time picker', message);
}
}

showDialog(){Alert.alert('Dialog','this is dialog',[
  {text: 'no', onPress: () => ToastAndroid.show('no pressed',1000)},
  {text: 'yes', onPress: () => ToastAndroid.show('yes pressed',1000)}
  ])}

_renderPage(data,pageID){
  return (
    <Image
    source={{uri: data}}
    style={styles.slide1} />
    );
}

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'red'
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color:'red'
  },

  wrapper: {
    
  },
  slide1: {
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    height:200,
    width:WINDOW_WIDTH
    
  },
  slide2: {
   height:200,
   width:WINDOW_WIDTH,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#97CAE5',
   
 },
 slide3: {
  height:200,
  width:WINDOW_WIDTH,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#92BBD9',
  
},
text: {
  color: '#fff',
  fontSize: 30,
  fontWeight: 'bold',
}
});

export default TestPage;
