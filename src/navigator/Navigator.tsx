import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PrincipalScreen } from '../screens/PrincipalScreen';
import { Subida } from '../screens/Subida';

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
                cardStyle: {
                    backgroundColor: '#8E9B90'
                }
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
