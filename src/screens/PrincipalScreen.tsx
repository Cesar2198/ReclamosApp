import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useImagePicker } from '../hooks/useImagePicker';
import { ButtonApp } from '../components/ButtonApp';
import { Picker } from '@react-native-picker/picker';

export const PrincipalScreen = () => {

    const { AbrirCamara, AbrirGaleria, selectedImage, SubirImagen, isLoading, testApi
        , pickImages, selectedImages, setSelectedImages, selectedCarpeta, setSelectedCarpeta,
        Carpetas
    } = useImagePicker();

    return (
        <ScrollView style={styles.Contenedor}>
            <View>
                <Text style={styles.TextoPrincipal}>Subida de imágenes</Text>
                <Text style={styles.TextoSecundario}>Reunión Aseguradora Salvadoreña</Text>
                <Text style={styles.TextoExplicacion}>Seleccione una imagen de su galeria o tome una fotografía* </Text>
            </View>
            {selectedImages.length > 0 && (
                <ScrollView horizontal style={styles.vistaImagenes}>
                    {selectedImages.map((image, index) => (
                        <Image key={index} source={{ uri: image }} style={{ width: 300, height: 300, marginLeft: 10, borderRadius: 10 }} />
                    ))}
                </ScrollView>
            )}
            <View style={{ marginTop: 10 }}>
                <ButtonApp
                    texto='Abrir Galería'
                    color='#B6C4A2'
                    accion={pickImages}
                />
            </View>

            <View style={{ marginTop: 10, marginBottom: 30 }}>
                <ButtonApp
                    texto='Abrir Cámara'
                    color='#B6C4A2'
                    accion={AbrirCamara}
                />
            </View>

            {selectedImages.length > 0 && (

                <View style={{
                    marginTop: 10, marginBottom: 50, gap: 20
                }}>

                    {/* Especificar a cual carpeta lo subiremos */}
                    <View>
                        <Text>Selecciona la carpeta de destino:</Text>
                        <Picker
                            selectedValue={selectedCarpeta}
                            onValueChange={(itemValue) => setSelectedCarpeta(itemValue)}
                            style={{ width: '100%' }}
                        >
                            <Picker.Item label="Selecciona la carpeta de destino" value="" />
                            {Carpetas.map((carpeta) => (
                                <Picker.Item key={carpeta.id} label={carpeta.name} value={carpeta.url} />
                            ))}
                        </Picker>
                    </View>


                    <Text style={styles.TextoSecundario}>Acciones</Text>
                    <ButtonApp
                        texto='Cancelar'
                        color='#D80032'
                        accion={() => setSelectedImages([])}
                    />
                    <ButtonApp
                        texto='Subir imagen(es) a carpeta'
                        color='#93C0A4'
                        accion={SubirImagen}
                    />
                </View>
            )}
            <View>
                <Text onPress={testApi} style={styles.TextoFooter}>Reunión Aseguradora Salvadoreña S.A. de C.V.</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Contenedor: {
        flex: 300,
        marginHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 20
    },
    TextoPrincipal: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    TextoSecundario: {
        fontSize: 12,
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
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10
    }

});
