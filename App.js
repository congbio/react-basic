import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import ScreenProduct from './src/components/ScreenProduct/ScreenProduct';
import ScreenDetail from './src/components/ScreenDetail/ScreenDetail';
 

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ScreenProduct} />
        <Stack.Screen name="Details" component={ScreenDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
};
 
export default App;