import React from 'react'
import { SafeAreaView, StatusBar} from 'react-native'
import { PrincipalScreen } from './src/screens/PrincipalScreen';

export const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#8E9B90'
    }}>
        <StatusBar
        backgroundColor="#8E9B90"
        barStyle='light-content'
      />
     <PrincipalScreen/>
    </SafeAreaView>
  )
}
