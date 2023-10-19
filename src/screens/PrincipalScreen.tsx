import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { useImagePicker } from '../hooks/useImagePicker';

export const PrincipalScreen = () => {

    const { AbrirCamara, AbrirGaleria, selectedImage, SubirImagen, isLoading
    } = useImagePicker();

    return (
        <View style={styles.Contenedor}>
            <Text style={styles.TextoPrincipal}>Subida de imágenes</Text>
            <Text style={styles.TextoSecundario}>Reclamos daños RAS</Text>
            {selectedImage ? "" : <Text style={styles.TextoExplicacion}>Seleccione una imagen de su galeria o tome una fotografía* </Text>}
            {selectedImage && (
                <Image
                    source={{ uri: selectedImage }}
                    style={{ height: 350, marginTop: 30 }}
                    resizeMode="cover"
                />
            )}
            <View style={{ marginTop: 30 }}>
                <Button title='Abrir Galeria'
                    onPress={AbrirGaleria}
                    color="#B6C4A2"
                ></Button>
            </View>

            <View style={{ marginTop: 20, marginBottom: 50 }}>
                <Button title='Abrir Cámara'
                    color="#B6C4A2"
                    onPress={AbrirCamara}
                ></Button>
            </View>

            {selectedImage && (
                <View style={{ marginTop: 20, marginBottom: 50 }}>
                    <Button title='Subir imagen a carpeta'
                        disabled={isLoading ? true : false}
                        color="#93C0A4"
                        onPress={SubirImagen}
                    ></Button>
                </View>
            )}

            <View>
                <Text style={styles.TextoFooter}>Reunión Aseguradora Salvadoreña S.A. de C.V.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Contenedor: {
        flex: 1, justifyContent: 'center', marginHorizontal: 30,
    },
    TextoPrincipal: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    TextoSecundario: {
        fontSize: 15,
    },
    TextoExplicacion: {
        fontSize: 9,
        marginTop: 10
    },
    TextoFooter: {
        fontSize: 12,
        fontWeight: '100',
        textAlign: 'center'
    }

});
