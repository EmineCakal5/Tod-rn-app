import React from 'react';
import { Search } from 'lucide-react-native';
import { TouchableOpacity, TextInput } from 'react-native';
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
import MovieDetailScreen from '../Screens/MovieDetailScreen';
import DiziDetailScreen from '../Screens/DiziDetailScreen';
import EnCokIzlenenlerScreen from '../Screens/EnCokIzlenenlerScreen';
import SearchScreen from '../Screens/SearchScreen';
import TopFilmScreen from '../Screens/TopFilmScreen';
import TopFilmWeekScreen from '../Screens/TopFilmWeekScreen';
import TopDiziScreen from '../Screens/TopDiziScreen';
import TopDiziWeekScreen from '../Screens/TopDiziWeekScreen';
import CocukDetailScreen from '../Screens/CocukDetailScreen';


const Stack = createNativeStackNavigator();


function AppNavigator() {
    return (

        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: 'black' },
                headerTintColor: 'white',
            }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'HomeScreen',
                }} />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    title: 'Details',
                }} />
            <Stack.Screen
                name="Password"
                component={PasswordScreen}
                options={{
                    title: 'password',
                }} />
            <Stack.Screen
                name="MyTabs"
                component={MyTabs}
                options={{
                    title: 'homepage',
                    headerShown: false

                }} />
            <Stack.Screen name="Package" component={PackageScreen} />
            <Stack.Screen name="HomePage" component={HomePageScreen} />
            <Stack.Screen name="FilmScreen" component={FilmScreen}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen name="DiziScreen" component={DiziScreen}
            options={{
                headerShown: false
            }} />
            <Stack.Screen name="SporScreen" component={SporScreen} />
            <Stack.Screen name="CocukScreen" component={CocukScreen} />
            <Stack.Screen name="CanliTVScreen" component={CanliTVScreen} />
            <Stack.Screen name="FormulaScreen" component={FormulaScreen}
            options={({ navigation }) => ({
                title: 'Formula 1',
                headerTitleAlign: 'center',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Arama')}
                        style={{ marginRight: 10 }}>
                        <Search color="white" />
                    </TouchableOpacity>
                )
            })} />
            <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
            <Stack.Screen name="DiziDetailsScreen" component={DiziDetailScreen} />
            <Stack.Screen name="EnCokIzlenenlerScreen" component={EnCokIzlenenlerScreen}
                options={({ navigation}) => ({
                    title: 'En Çok İzlenenler',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Arama')}
                            style={{ marginRight: 10 }}>
                            <Search color="white" />
                          
                        </TouchableOpacity>
                    )

                })} />
                <Stack.Screen name="Arama" component={SearchScreen} />
                <Stack.Screen name="TopFilmScreen" component={TopFilmScreen}
                options={({ navigation}) => ({
                    title: 'FİLM',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Arama')}
                            style={{ marginRight: 10 }}>
                            <Search color="white" />
                        </TouchableOpacity>
                    )
                })} />
                <Stack.Screen name="TopFilmWeekScreen" component={TopFilmWeekScreen}
                options={({ navigation}) => ({
                    title: 'FİLM',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Arama')}
                            style={{ marginRight: 10 }}>
                            <Search color="white" />
                        </TouchableOpacity>
                    )
                })} />
                <Stack.Screen name="TopDiziScreen" component={TopDiziScreen}/>
                <Stack.Screen name="TopDiziWeekScreen" component={TopDiziWeekScreen}/>
                <Stack.Screen name="CocukDetailScreen" component={CocukDetailScreen}/>

        </Stack.Navigator>
    );
}

export default AppNavigator;