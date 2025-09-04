import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Button , Alert, TextInput} from 'react-native';



function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, padding: 20, alignItems: 'center', backgroundColor:'black'}}>
      <Text style={{fontSize: 35, fontWeight: 'bold', color: '#FFD700'}}>TOD</Text>
    <TouchableOpacity 
    style={{
      backgroundColor: 'blue',
       padding: 15,
       paddingVertical: 10,
       paddingHorizontal: 120,
       borderRadius: 30, 
       marginTop: 400}}
       onPress={() => navigation.navigate('Details')}
       > 
       <Text style={{color: 'white', fontSize: 20}}>Giriş Yap</Text>
       </TouchableOpacity>

           <TouchableOpacity 
    style={{
      backgroundColor: '#FFD700',
       padding: 15,
       paddingVertical: 10,
       paddingHorizontal: 80,
       borderRadius: 30, 
       marginTop: 50}}
       onPress={() => navigation.navigate('Package')}
       > 
       <Text style={{color: 'black', fontSize: 20}}>Paket Seçenekleri</Text>
       </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;