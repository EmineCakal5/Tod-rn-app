import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import YabanciDiziScreen from '../Screens/YabanciDiziScreen';
import YerliDiziScreen from '../Screens/YerliDiziScreen';
import BetimlemeDiziScreen from '../Screens/BetimlemeDiziScreen';
import BelgeselScreen from '../Screens/BelgeselScreen';
import EglenceDiziScreen from '../Screens/EglenceDiziScreen';



const Tab = createMaterialTopTabNavigator();

export default function DiziTab({ navigation }) {

    return (

        <Tab.Navigator
            screenOptions={{
                // Tab bar genel stilleri
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                },
                // Tab etiket stilleri
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    // Yazılar alta kaymasın
                },
                // Aktif tab altındaki gösterge çizgisi
                tabBarIndicatorStyle: {
                    backgroundColor: 'yellow',
                    height: 4,
                    borderRadius: 6,
                    marginHorizontal: 5, // Çizgiyi başlığa göre ortalar
                },
                // Renk ayarları
                tabBarActiveTintColor: 'yellow',
                tabBarInactiveTintColor: '#888888',
                // Tab item ayarları
                tabBarItemStyle: {
                    justifyContent: 'center', // Dikey ortalama
                    alignItems: 'center',     // Yatay ortalama
                    width: 120,               // Her tab için sabit genişlik
                    height: 48,
                },
                tabBarScrollEnabled: true,
            }}
        >
            <Tab.Screen
                name="YabanciDizi"
                component={YabanciDiziScreen}
                options={{
                    title: "Yabancı Dizi"
                }} />

            <Tab.Screen
                name="YerliDizi"
                component={YerliDiziScreen}
                options={{
                    title: "Yerli Dizi"
                }} />
            <Tab.Screen
                name="Belgesel"
                component={BelgeselScreen}
            />
            <Tab.Screen
                name="EglenceDizi"
                component={EglenceDiziScreen}
                options={{
                    title: "Eğlence-Yaşam"
                }} />
            <Tab.Screen
                name="BetimlemeDiziScreen"
                component={BetimlemeDiziScreen}
                options={{
                    title: "Betimleme"
                }} />
        </Tab.Navigator>
    )
}