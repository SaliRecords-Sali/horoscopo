import React from "react";
import { View, Text, SafeAreaView } from "react-native";

//Componente
import { Header } from "../../componentes/header";

//Styles
import { styles } from "./styles";

export function Cartela(){
    return(
        <SafeAreaView style={styles.container}> 
        <Header 
        title="Cartela"
        />
            <View style={styles.content}>
                
                <Text style={styles.title}>Tela Cartela</Text>
            </View>
        </SafeAreaView>
    )
} 