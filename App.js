import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import WebView from './CustomWebView'

const App = () => {
  return (
    <View style={styles.container}>
        <WebView/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default App;