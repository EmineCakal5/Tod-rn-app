import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HaftaninMaclariScreen from '../Screens/HaftaninMaclariScreen';
import SporProgramlariScreen from '../Screens/SporProgramlariScreen';

const Tab = createMaterialTopTabNavigator();

export default function SporTab({ navigation }) {

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
                name="HaftaninMaclari"
                component={HaftaninMaclariScreen}
                options={{
                    title: "Haftanın Maçları"
                }} />

            <Tab.Screen
                name="SporProgramlari"
                component={SporProgramlariScreen}
                options={{
                    title: "Spor Programları"
                }} />

        </Tab.Navigator>
    )
}