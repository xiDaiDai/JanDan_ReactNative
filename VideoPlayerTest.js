 /**
  * Sample React Native App
  * https://github.com/facebook/react-native
  * @flow
  */

 import React, {
   Component
 } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   WebView,
   View,
   ToastAndroid,
   ToolbarAndroid,
   Dimensions
 } from 'react-native';

 import {
   Video
 } from 'react-native-media-kit';

 const width = Dimensions.get('window').width;

 class VideoPage extends Component {
   constructor(props) {
     super(props);

     this.state = {
       isloading: true,
     };
   }

   render() {
     return (
       <View style={styles.container}>
           <Video
            style={{width: width, height: width / (16/9)}}
            src={'http://v.yoai.com/femme_tampon_tutorial.mp4'}
            autoplay={false}
            preload={'none'}
            loop={false}
            controls={true}
            muted={false}
            poster={'http://static.yoaicdn.com/shoppc/images/cover_img_e1e9e6b.jpg'}
           />
      </View>
     );
   }

   backAndroid() {
     this.props.navigator.pop();
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

 export default VideoPage;
