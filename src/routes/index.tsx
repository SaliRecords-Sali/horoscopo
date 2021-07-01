import React from "react";
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";

export function Routes() {
    return(
        
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}