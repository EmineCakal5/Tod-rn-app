import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import PasswordScreen from '../Screens/PasswordScreen';
import PackageScreen from '../Screens/PackageScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './TabNavigator';
import FilmScreen from '../Screens/FilmScreen';
import DiziScreen from '../Screens/DiziScreen';
import SporScreen from '../Screens/SporScreen';
import CocukScreen from '../Screens/CocukScreen';
import CanliTVScreen from '../Screens/CanliTVScreen';
import HomePageScreen from '../Screens/HomePageScreen';
import FormulaScreen from '../Screens/FormulaScreen';

const Stack = createNativeStackNavigator();


function AppNavigator() {
  return (

        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
        headerStyle:{backgroundColor:'black'},
        headerTintColor:'white',
        }}>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
            title:'HomeScreen',
        }} />
        <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{
            title:'Details',
        }} />
        <Stack.Screen 
        name="Password" 
        component={PasswordScreen}
        options={{
            title:'password',
        }} />
        <Stack.Screen 
        name="MyTabs" 
        component={MyTabs}
        options={{
            title:'homepage',
            headerShown:false
         
        }} />        
        <Stack.Screen name="Package" component={PackageScreen} />
        <Stack.Screen name="HomePage" component={HomePageScreen} />
        <Stack.Screen name="FilmScreen" component={FilmScreen} />
        <Stack.Screen name="DiziScreen" component={DiziScreen} />
        <Stack.Screen name="SporScreen" component={SporScreen} /> 
        <Stack.Screen name="CocukScreen" component={CocukScreen} />
        <Stack.Screen name="CanliTVScreen" component={CanliTVScreen} />
        <Stack.Screen name="FormulaScreen" component={FormulaScreen} />
    
      </Stack.Navigator>
  );
}

export default AppNavigator;