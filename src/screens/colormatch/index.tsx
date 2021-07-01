import React from "react";
import { View, Text, SafeAreaView } from "react-native";

//Componente
import { Header } from "../../componentes/header";

//Styles
import { styles } from "./styles";

export function ColorMatch(){
    return(
        <SafeAreaView style={styles.container}> 
        <Header 
        title="Color Match"
        />
            <View style={styles.content}>
                
                <Text style={styles.title}>Tela Color Match</Text>
            </View>
        </SafeAreaView>
    )
} 