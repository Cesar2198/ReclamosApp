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

    const SubirImagen = async () => {
        setIsLoading(true);
        ToastAndroid.show('Iniciando el proceso de subida', ToastAndroid.SHORT);

        const formData = new FormData();
        formData.append('image', {
            uri: selectedImage,
            type: 'image/jpeg',
            name: 'image/jpg',
        });
        try {
            const response = await axios.post('http://189.84.99.38:10446/api/Imagenes/UploadImage', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
            console.log(response.data)
            ToastAndroid.show('Imagen subida con éxito', ToastAndroid.SHORT);
            setSelectedImage(undefined);
            setIsLoading(false);
        } catch (error) {
            console.error('Error al cargar la imagen:', error);
        }
    }

    return {
        AbrirCamara,
        AbrirGaleria,
        selectedImage,
        SubirImagen,
        isLoading
    }
}
