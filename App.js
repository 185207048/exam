import React, { Component } from 'react'
import { Text, View, Button, Modal ,StyleSheet} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewPager from '@react-native-community/viewpager';
import Home from './Home'
import List from './List'
import About from './About'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
// import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      visible: true,
      
    }
}

  _hide = () => {
    this.setState({ visible: false })
  }
  render() {
    return (

      <NavigationContainer>
       
        <Drawer.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              
              if (route.name === 'Home') {
                iconName = focused
                  ? '主页'
                  : 'home';
              } else if (route.name === 'List') {
                iconName = focused ? 'list' : 'list';
              }else if (route.name === 'About') {
                iconName = focused ? 'user' : 'user';
              }

              // You can return any component that you like here!
              return <SimpleLineIcons name={iconName} size={20} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}

        >
          <Drawer.Screen name="首页" component={Home} />
          <Drawer.Screen name="列表" component={List} />
          <Drawer.Screen name="我的" component={About} />
          </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}




