
import React,{Component} from 'react';
import {
	StyleSheet,
	Dimensions,
	Text,
	Image,
	View,
	Animated
} from 'react-native'

const  WINDOW_WIDTH = Dimensions.get('window').width;
const  WINDOW_HEIGHT = Dimensions.get('window').height;

class Splash extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	 
	  	fadeAnim:new Animated.Value(0)
	  };
	}

	componentDidMount(){
		Animated.timing(
				this.state.fadeAnim,
				{
					toValue:1,
					duration:2000,
				 
				}
			).start();
	}

	render(){
			return(
				<Animated.View style={
					[styles.container,{opacity:this.state.fadeAnim}]
				}>
							<Image source={require('./image/splash.jpg')} style={styles.centerImage}></Image>
				</Animated.View>		
			);

	}

}

const styles = StyleSheet.create({
			container:{
				flex:1,
				justifyContent:'center'
			},

			centerImage:{
				flex:1,
				width:WINDOW_WIDTH,
				height:WINDOW_HEIGHT
			}

});

export default Splash;
