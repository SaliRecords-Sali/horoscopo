import React from "react";
import { View, Text, TouchableOpacity,Dimensions, Platform } from "react-native";


//Styles
import { styles } from "./styles";

//icons
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from "../../global/theme";

type props = {
    title: string;
}

function isIphoneWithNotch() {
    const dimen = Dimensions.get('window');
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      (dimen.height === 780 ||
        dimen.width === 780 ||
        dimen.height === 812 ||
        dimen.width === 812 ||
        dimen.height === 844 ||
        dimen.width === 844 ||
        dimen.height === 896 ||
        dimen.width === 896 ||
        dimen.height === 926 ||
        dimen.width === 926)
    );
  }
export function Header({title}: props){
    return(
        <>
        <View style={[styles.container]}>
            <View style={[styles.efeitoHeader,{left:-200,top:-10,width:800,height:800,backgroundColor:theme.header.colors.efeito1}]}/>
            <View style={[styles.efeitoHeader,{left:-95,top:20,width:600,height:600,backgroundColor:theme.header.colors.efeito2}]}/>
            <View style={[styles.efeitoHeader,{left:-5,top:10,width:150,height:150,backgroundColor:theme.header.colors.efeito3}]}/>
            <View style={styles.content}>
                <View style={{flexDirection:'row',bottom:-5}}>
                    <TouchableOpacity>
                        <Ionicons name="arrow-back-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{marginLeft:5,marginTop:5,flex:1}}>{title}</Text>
                    <TouchableOpacity>
                        <Ionicons name="ios-ellipsis-vertical-sharp" size={24} color={'#000'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </>
    )
} 