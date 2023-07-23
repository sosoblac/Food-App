import React from 'react'
import { TouchableOpacity } from 'react-native';
import {Text, View,StyleSheet } from 'react-native';
import COLORS from '../src/consts/colors';

const PrimaryButton = ({title,onPress =()=>{}})=>{
    return <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.btnContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
}
const SecondaryButton = ({title,onPress =()=>{}})=>{
    return <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={{...styles.btnContainer,backgroundColor:COLORS.white}}>
            <Text style={{...styles.title,color:COLORS.primary}}>{title}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:COLORS.white
    },
    btnContainer:{
        backgroundColor:COLORS.primary,
        height:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    }
})
export {PrimaryButton,SecondaryButton}