import React from "react";
import { View, Text, SafeAreaView } from "react-native";

//Componente
import { Header } from "../../componentes/header";

//Styles
import { styles } from "./styles";

export function Closet(){
    return(
        <SafeAreaView style={styles.container}> 
        <Header 
        title="Closet"
        />
            <View style={styles.content}>
                
                <Text style={styles.title}>Tela Closet</Text>
            </View>
        </SafeAreaView>
    )
} 