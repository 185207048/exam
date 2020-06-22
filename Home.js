import React, { Component } from 'react'
import { Text, View, Button, Modal, StyleSheet, ScrollView, TouchableHighlight, Image } from 'react-native'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Music from './music'
import { TextInput } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import yq from './leson'
const Stack = createStackNavigator()

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            albums: [],
            img:'http://118.25.250.106/qypicture/huamulanpic.jpg',
            second:5,
            modalVisible:true,
        }
    }
    componentDidMount() {
        fetch("http://118.25.250.106:3200/qyalbums", { method: 'GET' })
            .then(resp => resp.json())
            .then(albums => {
                // console.log(albums[p].audioPath)
                this.setState({ albums: albums })
            })
            this.timer = setInterval(()=>{
                let {second} = this.state
                second--
                if(second == 0 ){
                  this.setState({
                    modalVisible:false
                  })
                }
                this.setState({
                  second
                })
          
              },500)
    }
    componentWillMount(){
        clearTimeout(this.timer)
      }
    _go() {
        let params = this.state.albums[5]
        this.props.navigation.navigate('yq',params)
    }
    _go1() {
        let params = this.state.albums[3]
        this.props.navigation.navigate('yq',params)
    }
    _go2() {
        let params = this.state.albums[9]
        this.props.navigation.navigate('yq',params)
    }
    _go3() {5
        let params = this.state.albums[15]
        this.props.navigation.navigate('yq',params)
    }
    _go4() {
        let params = this.state.albums[19]
        this.props.navigation.navigate('yq',params)
    }
    _go5() {
        let params = this.state.albums[26]
        this.props.navigation.navigate('yq',params)
    }
    render() {
        return (
        <View>
            <View>
          <Modal
            visible={this.state.modalVisible}
          >
          <TouchableHighlight
            style={styles.openButton}
          >
          <Text style={styles.textStyle}>{this.state.second}关闭</Text>
        </TouchableHighlight>
            <Image
              source={require('./assets/adv.png')}
              style={styles.advimg}
            ></Image>
          </Modal>
          </View>
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.top_no}></View>
                   
                    <View style={{ margin: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text style={{ fontWeight: "300" }}>今日推荐</Text>
                            <Text style={{ color: '#ccc' }}>更多 </Text>
                        </View>
                        <View style={{ height: 220, flexDirection: 'row', flexWrap: "wrap", marginTop: 10 }}>

                            <TouchableHighlight onPress={() => this._go()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/aiwopic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go1()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/bumiedexinpic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go2()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/limoupic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go3()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/sibenpic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go4()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/sunshinepic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go5()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/xintongpic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this._go5()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/zhaomopic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this._go4()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/yupic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this._go()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/duanqiaocanxuepic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go1()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/chengfupic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go2()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/huantingpic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this._go3()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/ruguodangshipic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>
                            
                        </View>
                    </View>
                </View>
                <Music></Music>
            </View>
        </View>
        )
    }
}
function Ho() {
    return (
        <Stack.Navigator initialRouteName="Home">
            {/* initialRouteName 设置主页 第一个页面 */}
            <Stack.Screen name="Home" component={Home} options={{ title: '主页' }} />
            <Stack.Screen name="yq" component={yq} options={{ title: '单曲' }} />
        </Stack.Navigator>
    );
}
export default Ho
const styles = StyleSheet.create({
    container: { justifyContent: 'space-around' },
    top: { height: 800 },
    bottom: { height: 80, flexDirection: "row" },
    bottom_t: { flexGrow: 1, backgroundColor: 'yellow' },
    bf: { marginBottom: 10, marginRight: 15 },
    top_no: { height: 67, backgroundColor: '#ccc' },
    top_img: { height: 200, margin: 10 ,marginTop:5 },
    top_input: { height: 60, flexDirection: 'row' },
    input: { borderWidth: 1, height: 35, borderColor: '#ccc', marginTop: 15, borderRadius: 18, width: '85%', marginLeft: 10 },
    solid: { height: 1, backgroundColor: 'black', width: '100%', marginTop: 10 },
    box: { width: 93, height: 90, margin: 10 },
  advimg:{
    width:'100%',
    height:'100%',
    resizeMode: 'stretch',
  },
  openButton: {
    backgroundColor: "#00ffff",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position:"absolute",
    top:0,
    width:80,
    right:0
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})