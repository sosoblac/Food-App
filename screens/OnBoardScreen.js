import React from 'react';
import { Image,Text, View,StyleSheet } from 'react-native';
import COLORS from '../src/consts/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../cmponents/Buttons';

export default function OnBoardScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
        <View style={{height:330}}>
          <Image 
            style={{
              height:'100%',
              width:'100%',
              resizeMode:'contain',
              top:-10
            }} 
            source={require("../src/assets/yam_pottage.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={{fontSize:32,fontWeight:'bold',textAlign:'center'}}>
              Ada's Dish
            </Text>
            <Text 
              style={{
                marginTop:20,
                fontSize:18,
                textAlign:'center',
                color:COLORS.grey
                }}>
              We help you find the best and delicious food
            </Text>
          </View>
          <View style={styles.indicatorContainer}>
            <View style={styles.currentIndicator}/>
            <View style={styles.indicator}/>
            <View style={styles.indicator}/>
          </View>
          <PrimaryButton onPress={()=>navigation.navigate('Home')} title='Get Started'/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
textContainer:{
  flex:1,
  paddingHorizontal:50,
  justifyContent:'space-between',
  paddingBottom:40
},
indicatorContainer:{
  height:50,
  flex:1,
  justifyContent:'center',
  flexDirection:'row',
  alignItems:'center'
},
currentIndicator:{
  height:12,
  width:30,
  borderRadius:10,
  backgroundColor:COLORS.primary,
  marginHorizontal:5
},
indicator:{
  height:12,
  width:12,
  borderRadius:6,
  backgroundColor:COLORS.grey,
  marginHorizontal:5
}
})