import React from "react";
import { View, Text, SafeAreaView } from "react-native";

//Componente
import { Header } from "../../componentes/header";

//Styles
import { styles } from "./styles";

export function Descontos(){
    return(
        <SafeAreaView style={styles.container}> 
        <Header 
        title="Descontos"
        />
            <View style={styles.content}>
                
                <Text style={styles.title}>Descontos</Text>
            </View>
        </SafeAreaView>
    )
} 