import React, { useEffect } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useImagePicker } from '../hooks/useImagePicker';
import { ButtonApp } from '../components/ButtonApp';
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> { };


export const PrincipalScreen = ({ navigation }: Props) => {

    const {
        Carpetas
    } = useImagePicker();

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
        <ScrollView style={styles.Contenedor}>
            <View>
                <Text style={styles.TextoPrincipal}>Bienvenido/a</Text>
                <Text style={styles.TextoSecundario}>Reunión Aseguradora Salvadoreña</Text>
                <Text style={styles.TextoExplicacion}>Ingresa según tu departamento asignado </Text>
            </View>
            <View style={styles.cardContainer}>
                {Carpetas.map((carpeta) => (
                    <View>
                        <ButtonApp texto={carpeta.name}
                            key={carpeta.id}
                            accion={() => navigation.navigate("SubidaScreen", {
                                carpeta: carpeta
                            })}
                            color='#5C685E'
                        />
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Contenedor: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#8E9B90',
        elevation: 1
    },
    TextoPrincipal: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff'
    },
    TextoSecundario: {
        fontSize: 12,
        color: '#fff'
    },
    TextoExplicacion: {
        fontSize: 10,
        marginTop: 10,
        color: '#D9D9D9'
    },
    cardContainer: {
        marginTop: 30,
        display: 'flex',
        gap: 20
    },
});
