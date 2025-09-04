import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Button , Alert, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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

function DetailsScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Giriş işlemi burada yapılacak
    Alert.alert('Giriş Yapıldı', `Kullanıcı Adı: ${username}\nŞifre: ${password}`);
  };

  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center', backgroundColor: 'black' }}>
      <Text 
      style={{fontSize: 25,color: 'white',}}>GİRİŞ YAP</Text>
      <Text style={{ fontSize: 14, color: 'gray', marginTop: 19, textAlign:'center'}}>Lütfen üyeliğinizde kayıtlı cep telefonu numaranızı veya  e-posta adresinizi giriniz.</Text>
          <TextInput
        style={{
          width: '100%',
          height: 50,
          marginTop:45,
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          paddingHorizontal: 5,
          marginBottom: 15,
          color: 'white',
          textAlign:'left',
          fontSize: 16,
        }}
        placeholder="Cep Telefonu/ E-posta/ Üyelik Numarası"
        placeholderTextColor="white"
        value={username}
        onChangeText={setUsername}
      />
        <TextInput
        style={{
          width: '100%',
          height: 50,
          marginTop:10,
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          paddingHorizontal: 5,
          marginBottom: 15,
          color: 'white',
          textAlign:'left',
          fontSize: 16,
        }}
        placeholder="Şifre"
        placeholderTextColor="white"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
          <TouchableOpacity 
    style={{
      backgroundColor: 'blue',
       padding: 15,
       paddingVertical: 10,
       paddingHorizontal: 130,
       borderRadius: 30, 
       marginTop: 36}}
       onPress={() => alert('Giriş Yapıldı')}
       > 
       <Text style={{color: 'white', fontSize: 20}}>Giriş Yap</Text>
       </TouchableOpacity>
      <TouchableOpacity style={{

      }}
      onPress={() => navigation.navigate('Password')}
      >
      <Text style={{fontSize: 16, color: 'white', marginTop: 26, textAlign: 'center'}}>Şifremi Bilmiyorum</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 14, color: 'gray', marginTop: 30, textAlign:'center'}}>Henüz üyeliğiniz yoksa, paket seçeneklerini görmek ve üye olmak için tıklayın</Text>
          <TouchableOpacity 
    style={{
      backgroundColor: '#FFD700',
       padding: 15,
       width: '100%',
       height: 50,
       paddingVertical: 10,
       paddingHorizontal: 10,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 30, 
       marginTop: 36}}
       onPress={() => alert('Giriş Yapıldı')}
       > 
       <Text style={{color: 'black', fontSize: 16, fontWeight:'bold'}}>Paket Seçenekleri</Text>
       </TouchableOpacity>
    </View>
  );  
}

function PasswordScreen() {
  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center', backgroundColor: 'black' }}>
      <Text style={{fontSize: 25,color: 'white',}}>ŞİFREMİ BİLMİYORUM</Text>
      <Text style={{ fontSize: 14, color: 'gray', marginTop: 19, textAlign:'center'}}>Üyeliğinize kayıtlı cep telefonu veya  e-posta adresine gönderebileceğimiz kod ile şifrenizi oluşturabilirsiniz</Text>
      <Text style={{ fontSize: 14, color: 'gray', marginTop: 39, textAlign:'center'}}>Paket seçenekleri hakkında bilgi almak için lütfen bizimle iletişime geçin.</Text>
      <TextInput
        style={{
          width: '100%',
          height: 50,
          marginTop:45,
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          paddingHorizontal: 5,
          marginBottom: 15,
          color: 'white',
          textAlign:'left',
          fontSize: 16,
        }}
        placeholder="Cep Telefonu/ E-posta/ Üyelik Numarası"
        placeholderTextColor="white"
        />
                  <TouchableOpacity 
    style={{
      backgroundColor: 'blue',
       padding: 15,
       paddingVertical: 10,
       paddingHorizontal: 130,
       borderRadius: 30, 
       marginTop: 36}}
       onPress={() => alert('Giriş Yapıldı')}
       > 
       <Text style={{color: 'white', fontSize: 20}}>Devam Et</Text>
       </TouchableOpacity>
      </View>
  );
}

function PackageScreen() {

  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center', backgroundColor: 'black' }}>
      <Text style={{fontSize: 25,color: 'white',}}>Paket Seçenekleri</Text>
      </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
        <Stack.Screen name="Package" component={PackageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

