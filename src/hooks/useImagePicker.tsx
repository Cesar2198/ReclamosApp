import axios from 'axios';
import React, { useState } from 'react'
import {
    launchImageLibrary, ImageLibraryOptions, launchCamera
    , CameraOptions
} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import { ToastAndroid } from 'react-native';

export const useImagePicker = () => {

    const [selectedImage, setSelectedImage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    let contador: number = 0;
    let urlBase: string = 'http://189.84.99.38:10446/api/'

    ///Abrir Camara
    const AbrirCamara = () => {
        const options: CameraOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
                console.log(imageUri);
            }
        });
    }


    const AbrirGaleria = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('Image picker error: ', response.errorMessage);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
                console.log(imageUri);
            }
        });
    };

    ///Test api
    const testApi = async () => {
        if (contador == 3) {
            axios.get(urlBase + 'Imagenes/Datetime')
                .then(response => {
                    ToastAndroid.show('Resultado: ' + response.data, ToastAndroid.SHORT);
                })
                .catch(error => {
                    // Maneja cualquier error que pueda ocurrir
                    ToastAndroid.show(error.message, ToastAndroid.SHORT);
                });
            contador = 0;
        } else {
            contador++;
        }
    }

    const SubirImagen = async () => {
        setIsLoading(true);
        ToastAndroid.show('Iniciando el proceso de subida', ToastAndroid.SHORT);

        const formData = new FormData();
        formData.append('image', {
            uri: selectedImage,
            type: 'image/jpeg',
            name: 'image/jpg',
        });
        const response = await axios.post(urlBase + 'Imagenes/UploadImage', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((response => {
            console.log(response.data)
            ToastAndroid.show('Imagen subida con éxito', ToastAndroid.SHORT);
            setSelectedImage(undefined);
            setIsLoading(false);
        }))
            .catch(error => {
                ToastAndroid.show(error.message, ToastAndroid.SHORT);
                setSelectedImage(undefined);
                setIsLoading(false);
            })
    }

    return {
        AbrirCamara,
        AbrirGaleria,
        selectedImage,
        SubirImagen,
        isLoading,
        contador,
        testApi
    }
}
