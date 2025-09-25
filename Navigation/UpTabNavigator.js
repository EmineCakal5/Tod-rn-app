import React from 'react';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import YabanciFilmScreen from '../Screens/YabanciFilmScreen';
import YerliFilmScreen from '../Screens/YerliFilmScreen';
import BetimlemeScreen from '../Screens/BetimlemeScreen';

const Tab = createMaterialTopTabNavigator();

export default function UpTab({ navigation}) {

    return (

        <Tab.Navigator
          screenOptions={{
                // Tab bar genel stilleri
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                    paddingHorizontal: 10 // Yanlardaki boşluk
                },
                // Tab etiket stilleri
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginHorizontal: 8
                },
                // Aktif tab altındaki gösterge çizgisi
                tabBarIndicatorStyle: {
                    backgroundColor: 'yellow', // Kırmızı renk
                    height: 4,
                    borderRadius: 6
                },
                // Renk ayarları
                tabBarActiveTintColor: 'yellow',
                tabBarInactiveTintColor: '#888888',
                // Tab düzeni
                tabBarItemStyle: {
                    paddingVertical: 8,
                    paddingHorizontal: 4
                },
                tabBarContentContainerStyle: {
                    alignItems: 'center'
                },
                // Kaydırma ayarları
                tabBarScrollEnabled: false,
            }}
        >
            <Tab.Screen
            name = "YabanciFilm"
            component = {YabanciFilmScreen}
            options={{
                title: "Yabancı Film"
            }}/>

            <Tab.Screen
            name = "YerliFilm"
            component = {YerliFilmScreen}
            options={{
                title: "Yerli Film"
            }}/>
            <Tab.Screen
            name = "Betimleme"
            component = {BetimlemeScreen}
            />
        </Tab.Navigator>
    )
}