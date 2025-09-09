import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import PackageScreen from './PackageScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            

        </Stack.Navigator>
    );
}   