import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#8E9B90'
      }}>
        <StatusBar
          backgroundColor="#5C685E"
          barStyle='light-content'
        />
        <Navigator />
      </SafeAreaView>
    </NavigationContainer>

  )
}


export default App;
