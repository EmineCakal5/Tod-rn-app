import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from './DetailsScreen';
import PasswordScreen from './PasswordScreen';
import PackageScreen from './PackageScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{  
                    title: 'hello',
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: 'white',
                }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Password" component={PasswordScreen} />     
            <Stack.Screen name="Package" component={PackageScreen} />
        </Stack.Navigator>
    );
}   