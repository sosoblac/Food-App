import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';
import COLORS from '../src/consts/colors';
import CartScreen from './CartScreen';



const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
   <Tab.Navigator 
    screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveTintColor:COLORS.primary,
          tabBarStyle:{ height:55,
            borderTopWidth:0,
            elevation:0}
        }}>
      <Tab.Screen 
        name='HomeScreen' 
        component={HomeScreen} 
        options={{
          tabBarIcon:({color})=>(<Icon name='home-filled' color={color} size={28}/>
          ),
        }}
      />
      <Tab.Screen 
        name='LocalMall' 
        component={HomeScreen} 
        options={{
          tabBarIcon:({color})=>(<Icon name='local-mall' color={color} size={28}/>
          ),
        }}
      />
      <Tab.Screen 
        name='Search' 
        component={HomeScreen} 
        options={{
          tabBarIcon:({color})=>(
            <View 
              style={{
                height:60,
                width:60,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:COLORS.white,
                borderColor:COLORS.primary,
                borderWidth:2,
                borderRadius:30,
                top:-25,
                elevation:5
              }}>
              <Icon name='search' color={COLORS.primary} size={28}/>
            </View>
          
          ),
        }}
      />
      <Tab.Screen 
        name='Favorite' 
        component={HomeScreen} 
        options={{
          tabBarIcon:({color})=>(<Icon name='favorite' color={color} size={28}/>
          ),
        }}
      />
      <Tab.Screen 
        name='Cart' 
        component={CartScreen} 
        options={{
          tabBarIcon:({color})=>(<Icon name='shopping-cart' color={color} size={28}/>
          ),
        }}
      />
   </Tab.Navigator>
  )
}
