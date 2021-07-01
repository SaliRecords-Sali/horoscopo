import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Paginas
import { Home } from '../screens/home';
import { Cartela } from '../screens/cartela';
import { ColorMatch } from '../screens/colormatch';
import { Closet } from '../screens/closet';
import { Descontos } from '../screens/descontos';

const { Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
        headerMode="none"
        screenOptions={{
            cardStyle:{
                backgroundColor: 'transparent'
            }
        }}
        >
            <Screen 
             name="Home"
             component={Home}
            />
            <Screen 
             name="Cartela"
             component={Cartela}
            />
            <Screen 
             name="ColorMatch"
             component={ColorMatch}
            />
            <Screen 
             name="Closet"
             component={Closet}
            />
            <Screen 
             name="Descontos"
             component={Descontos}
            />
        </Navigator>
    )
}