import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PrincipalScreen } from '../screens/PrincipalScreen';
import { Subida } from '../screens/SubidaScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
            // initialRouteName="Pagina1Screen"
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },

            }}
        >
            <Stack.Screen name="Inicio" options={{
                title: "Inicio"
            }} component={PrincipalScreen} />
            <Stack.Screen name="SubidaScreen" options={{
                title: "Súbida de Imagenes"
            }} component={Subida} />
        </Stack.Navigator>
    );
}
