import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomePageScreen from '../Screens/HomePageScreen';
import {  Home, Search, ListChecks, User  } from "lucide-react-native";
import SearchScreen from '../Screens/SearchScreen';
import ListScreen from '../Screens/ListScreen';
import AccountScreen from '../Screens/AccountScreen';
import FilmScreen from '../Screens/FilmScreen';
import DiziScreen from '../Screens/DiziScreen';
import SporScreen from '../Screens/SporScreen';
import CocukScreen from '../Screens/CocukScreen';
import CanlıTVScreen from '../Screens/CanlıTVScreen';




const Tab = createBottomTabNavigator();

const UpTop = createMaterialTopTabNavigator();

function MenüTabs({navigation}) {
  return (
    <UpTop.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'black' },
         tabBarScrollEnabled: true,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarIndicatorStyle: { backgroundColor: 'black' },
        tabBarLabelStyle: { fontSize: 14, fontWeight:'bold' },
      }}
    >
      <UpTop.Screen name="Film" component={FilmScreen}
      options={{
        title: 'FİLM',
        
      }} />
      <UpTop.Screen name="Dizi" component={DiziScreen}
       options={{
        title: 'DİZİ',
      }}  />
      <UpTop.Screen name="Spor" component={SporScreen}
       options={{
        title: 'SPOR',
      }}  />
      <UpTop.Screen name="Çocuk" component={CocukScreen}
       options={{
        title: 'ÇOCUK',
      }}  />
      <UpTop.Screen name="Canlı TV" component={CanlıTVScreen}
       options={{
        title: 'CANLI TV',
      }}  />

    </UpTop.Navigator>
  );
}

function MyTabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black',
          borderTopWidth: 0,
         },
        tabBarActiveTintColor: 'white',
        
      
      tabBarIcon : ({ color, size }) => {
        if (route.name === 'HomePage') {
          return <Home size={size} color={color} />;
        }else if (route.name === 'Arama') {
          return <Search size={size} color={color} />;
        } else if (route.name === 'Listelerim') {
          return <ListChecks size={size} color={color} />;
        } else if (route.name === 'Hesabım') {
          return <User size={size} color={color}/>;
       } },  
       })}
      >
      <Tab.Screen 
      name="HomePage" 
      component={MenüTabs}
      options={{
        title: 'Ana Sayfa',
      }}/>
      <Tab.Screen 
      name="Arama" 
      component={SearchScreen} />
      <Tab.Screen 
      name="Listelerim" 
      component={ListScreen} />
      <Tab.Screen 
      name="Hesabım" 
      component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;