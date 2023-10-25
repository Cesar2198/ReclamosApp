import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';


interface BotonAppProps {
    texto: string,
    color?: string
    accion: () => void;
}

export const ButtonApp = ({ texto, color = "#2D2D2D", accion }: BotonAppProps) => {
    return (
        <TouchableNativeFeedback
            onPress={() => accion()}
            background={TouchableNativeFeedback.Ripple('F3FAE1', false, 200)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
            }}
            >
                <Text style={{
                    ...styles.botonText,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>{texto}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    boton: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        elevation: 3, 
    },
    botonText: {
        textAlign: 'center',
        textTransform: 'uppercase'
    }
});
