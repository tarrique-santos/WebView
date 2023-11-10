import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { Camera } from 'expo-camera';

const CustomWebView = () => {
  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const { status } = await Camera.requestPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permissão da câmera não foi concedida!');
        }
      } catch (error) {
        console.error('Erro ao solicitar permissões de câmera:', error);
      }
    };

    requestCameraPermission();
  }, []);

  return <WebView source={{ uri: 'https://mapeamento-residos.vercel.app/' }} />;
};

export default CustomWebView;