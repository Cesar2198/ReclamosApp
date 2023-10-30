import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

export const Subida = ({ navigation, route }: Props) => {
    /// Uso del hook de navegacion
    const navigator = useNavigation()


    ///Obtenemos los parametros
    const params = route.params;

    ///Modificar las propiedades del stack
    useEffect(() => {
        navigation.setOptions({
            headerBackTitle: '',
            headerStyle: {
                backgroundColor: '#5C685E', // Cambia el color de fondo de la barra de navegación
            },
            headerTintColor: 'white', // Cambia el color del texto del título
        })
    }, [])
    return (
        <View>
            <Text >{JSON.stringify(params, null, 3)}</Text>
            <Button
                title='Ir al inicio'
                onPress={() => navigation.navigate('Inicio')}
            />
        </View>
    )
}
