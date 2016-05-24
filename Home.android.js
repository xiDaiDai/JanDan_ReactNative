
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
import TreeNewBeeList from'./TreeNewBeeList';
import GirlsList from './GirlsList';
import PicturesList from './PicturesList';
import SettingPage from './SettingPage';

const WINDOW_WIDTH = Dimensions.get('window').width;
const DRAWER_ALIGN_RIGHT= 100;


 
 
class Home extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      title:'新鲜事'
    };
  }

  componentDidMount(){
    this.setState({centerContent:<NewsList navigator={this.props.navigator}/>});
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
                    navIcon={require('./image/ic_menu_white_18dp.png')}
                    title={this.state.title}
                    titleColor='white'
                    actions={[{title:'刷新',icon: require('./image/ic_refresh_white_24dp.png'), show: 'always'}]}
                    onIconClicked={() => this.refs.drawerLayoutAndroid.openDrawer()}
                    onActionSelected={this.onActionSelected} />
                    {this.state.centerContent}                    
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
     switch(theme){
        case 'freshNews':
          this.setState({centerContent :<NewsList navigator={this.props.navigator}/>,title:'新鲜事'})
              break;
        case 'treeNewBee':
          this.setState({centerContent :<TreeNewBeeList navigator={this.props.navigator}/>,title:'段子'})
              break;
        case 'pictures':
          this.setState({centerContent :<PicturesList navigator={this.props.navigator}/>,title:'无聊图'})
              break;
        case 'girls':
          this.setState({centerContent :<GirlsList navigator={this.props.navigator}/>,title:'妹子图'})
              break;
        case 'setting':
          this.setState({centerContent :<SettingPage navigator={this.props.navigator}/>,title:'设置'})
              break;
     }
    
  }


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  content: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',

  },
  toolBar: {
    backgroundColor: '#232320',
    height: 50,
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default Home;
