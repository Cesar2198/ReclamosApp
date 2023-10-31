import React, { useEffect } from 'react'
import { Text, View, Button, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StackScreenProps } from '@react-navigation/stack';
import { ButtonApp } from '../components/ButtonApp';
import { ScrollView } from 'react-native-gesture-handler';
import { useImagePicker } from '../hooks/useImagePicker';

interface Props extends StackScreenProps<any, any> { };

export const Subida = ({ navigation, route }: Props) => {
    /// Uso del hook de navegacion
    const navigator = useNavigation()


    ///Obtenemos los parametros
    const params = route.params;

    const { AbrirCamara, AbrirGaleria, selectedImage, SubirImagen, isLoading, testApi
        , pickImages, selectedImages, setSelectedImages, selectedCarpeta, setSelectedCarpeta,
        Carpetas
    } = useImagePicker();

    ///Modificar las propiedades del stack
    useEffect(() => {
        navigation.setOptions({
            title: params?.carpeta.name,
            headerBackTitle: '',
            headerStyle: {
                backgroundColor: '#5C685E', // Cambia el color de fondo de la barra de navegación
            },
            headerTintColor: 'white', // Cambia el color del texto del título
        })
        setSelectedCarpeta(params?.carpeta.url);
    }, [])
    return (
        <ScrollView style={styles.Contenedor}>
        <View>
            <Text style={styles.TextoPrincipal}>Subida de Imagenes</Text>
            <Text style={styles.TextoSecundario}>Subiendo a la carpeta {params?.carpeta.url}</Text>
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

        <View style={{ marginTop: 15, marginBottom: 30 }}>
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
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: '#8E9B90',
        elevation: 1
    },
    TextoPrincipal: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    TextoSecundario: {
        fontSize: 12,
        color: '#fff',
        marginTop: 5
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
