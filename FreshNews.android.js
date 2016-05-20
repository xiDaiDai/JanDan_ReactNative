
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  DrawerLayoutAndroid,
  ToastAndroid,
  ToolbarAndroid,
  
   
} from 'react-native';
import DrawerList from './DrawerList';
import NewsList from './NewsList';

const WINDOW_WIDTH = Dimensions.get('window').width;
const DRAWER_ALIGN_RIGHT= 100;

 

class FreshNews extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        content:'freshNews',

    };
  }
  render() {
    return (
       

      <View style={styles.container}>
          <DrawerLayoutAndroid
              ref='drawerLayoutAndroid'//获取Virtula DOM节点标识
              keyboardDismissMode = 'on-drag'
              drawerWidth = {WINDOW_WIDTH - DRAWER_ALIGN_RIGHT}
              drawerPosition = {DrawerLayoutAndroid.positions.left}
              renderNavigationView={()=>this.renderNavigationView()}>
              <View style={styles.container}>
                   <ToolbarAndroid
                    style={styles.toolBar}
                    navIcon={require('./image/ic_drawer.png')}
                    title="JanDan"
                    titleColor='white'
                    actions={[{title: '新鲜事', icon: require('./image/ic_action_refresh.png'), show: 'always'}]}
                    onIconClicked={() => this.refs.drawerLayoutAndroid.openDrawer()}
                    onActionSelected={this.onActionSelected} />
                    <NewsList navigator={this.props.navigator}></NewsList>
                    
              </View>
          </DrawerLayoutAndroid>
      </View>
    );
  }

  renderNavigationView(){
    return(<DrawerList  onItemSelected={(theme)=>this.onItemSelected(theme)}/>);
  }

  onItemSelected(theme){
     this.refs.drawerLayoutAndroid.closeDrawer();
     ToastAndroid.show(theme, ToastAndroid.LONG);
     this.setState({content:theme});
  }


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',

  },
  toolBar: {
    backgroundColor: '#232320',
    height: 55,
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default FreshNews;
