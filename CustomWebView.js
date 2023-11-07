import React from "react";
import { WebView } from 'react-native-webview';

const CustomWebView = () => {
    return (
        <WebView source={{ uri: 'https://mapeamento-residos.vercel.app/' }} />
    );
}

export default CustomWebView;