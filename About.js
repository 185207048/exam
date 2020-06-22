import React, { Component } from 'react'
import { Text, View, Button, Modal, StyleSheet,TouchableHighlight,Image} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewPager from '@react-native-community/viewpager';
import Home from './Home'
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default class about extends React.Component {

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.page}>
            <Text style={styles.font_Size}>吃葡萄不吐皮的个人中心</Text>
          </View>
          <View style={styles.header}>
            <Image source={require('./assets/timg.png')} style={styles.img}></Image>
            <View><Text style={styles.name}>吃葡萄不吐皮</Text></View>
          </View>
          <View style={styles.lines}></View>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row-reverse",
    height:"100%"

  },
  img:{
    width:40,
    height:40
  },
  header:{
    display:"flex",
    flexDirection:"column",
    position:"absolute",
    right:"5%",
    top:"10%",
   

  },
  page:{
    position:"absolute",
    right:"5%",
    top:"2.5%"
  },
  font_Size:{
    fontSize:20
  },
  name:{
    position:"relative",
    top:"-100%",
    right:"-50%"
  },
  lines:{
    width:"100%",
    height:1,
    borderBottomColor:"#d9d9d9",
    borderBottomWidth:1,
    position:"absolute",
    top:"20%"
  },
  setting:{
    position:"absolute",
    top:"30%",
    right:"5%"
  },
  aboutx:{
    position:"absolute",
    top:"40%",
  }
})
  
  