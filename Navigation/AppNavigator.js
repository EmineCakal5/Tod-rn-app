import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import PasswordScreen from '../Screens/PasswordScreen';
import PackageScreen from '../Screens/PackageScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './TabNavigator';

const Stack = createNativeStackNavigator();


function AppNavigator() {
  return (

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
            title:'HomeScreen',
            headerStyle:{backgroundColor:'black'},
            headerTintColor:'white',
        }} />
        <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{
            title:'Details',
            headerStyle:{backgroundColor:'black'},
            headerTintColor:'white',

        }} />
        <Stack.Screen 
        name="Password" 
        component={PasswordScreen}
        options={{
            title:'password',
            headerStyle:{backgroundColor:'black'},
            headerTintColor:'white',
           
        }} />
        <Stack.Screen 
        name="MyTabs" 
        component={MyTabs}
        options={{
            title:'homepage',
            headerStyle:{backgroundColor:'black'},
            headerTintColor:'white',
        }
        } />
        
      </Stack.Navigator>
  );
}

export default AppNavigator;