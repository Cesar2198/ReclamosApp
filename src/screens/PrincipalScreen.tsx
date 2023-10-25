import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useImagePicker } from '../hooks/useImagePicker';

export const PrincipalScreen = () => {

    const { AbrirCamara, AbrirGaleria, selectedImage, SubirImagen, isLoading, testApi
        , pickImages, selectedImages, setSelectedImages
    } = useImagePicker();

    return (
        <View style={styles.Contenedor}>
            <ScrollView>
                <Text style={styles.TextoPrincipal}>Subida de imágenes</Text>
                <Text style={styles.TextoSecundario}>Reclamos daños RAS</Text>
                {selectedImages.length > 0 ? "" : <Text style={styles.TextoExplicacion}>Seleccione una imagen de su galeria o tome una fotografía* </Text>}
                {selectedImages.length > 0 && (
                    <ScrollView horizontal style={styles.vistaImagenes}>
                        {selectedImages.map((image, index) => (
                            <Image key={index} source={{ uri: image }} style={{ width: 300, height: 300, marginLeft: 10 }} />
                        ))}
                    </ScrollView>
                )}
                <View style={{ marginTop: 30 }}>
                    <Button title='Abrir Galeria'
                        onPress={pickImages}
                        color="#B6C4A2"
                    ></Button>
                </View>

                <View style={{ marginTop: 20, marginBottom: 50 }}>
                    <Button title='Abrir Cámara'
                        color="#B6C4A2"
                        onPress={AbrirCamara}
                    ></Button>
                </View>

                {selectedImages.length > 0 && (
                    <View style={{ marginTop: 10, marginBottom: 50, gap: 20, display: 'flex',
                    flexDirection: 'row' }}>
                        <Button title='Cancelar'
                            color="#D80032"
                            onPress={() => setSelectedImages([])}
                        ></Button>
                        <Button title='Subir imagen(es) a carpeta'
                            disabled={isLoading ? true : false}
                            color="#93C0A4"
                            onPress={SubirImagen}
                        ></Button>
                    </View>
                )}
                <View>
                    <Text onPress={testApi} style={styles.TextoFooter}>Reunión Aseguradora Salvadoreña S.A. de C.V.</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Contenedor: {
        flex: 1, justifyContent: 'center', marginHorizontal: 30,
        paddingTop: 10
    },
    TextoPrincipal: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    TextoSecundario: {
        fontSize: 15,
        color: '#fff'
    },
    TextoExplicacion: {
        fontSize: 9,
        marginTop: 10,
        color: '#D9D9D9'
    },
    TextoFooter: {
        fontSize: 12,
        fontWeight: '100',
        textAlign: 'center',
        color: '#D9D9D9'
    },
    vistaImagenes: {
        marginTop: 30
    }

});
