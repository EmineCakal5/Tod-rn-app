import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Button , Alert, TextInput} from 'react-native';



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

export default PasswordScreen;