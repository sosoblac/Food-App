/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useEffect} from 'react';
import COLORS from './src/consts/colors';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import OnBoardScreen from './screens/OnBoardScreen';
import BottomNavigator from './screens/BottomNavigator';
import DetailsScreen from './screens/DetailsScreen';


const Stack = createNativeStackNavigator()



function App(): JSX.Element {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle='dark-content'/>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name = 'OnBoard' component = {OnBoardScreen} />
        <Stack.Screen name = 'Home' component = {BottomNavigator}/>
        <Stack.Screen name = 'DetailsScreen' component = {DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
