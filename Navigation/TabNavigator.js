import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePageScreen from '../Screens/HomePageScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,}}
      >
      <Tab.Screen 
      name="HomePage" 
      component={HomePageScreen}
       />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
