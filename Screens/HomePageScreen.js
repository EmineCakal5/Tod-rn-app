import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Button , Alert, TextInput} from 'react-native';

function HomePageScreen({navigation}) {
  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center', backgroundColor: 'black' }}>
      <Text style={{fontSize: 25,color: 'white',}}>Ana Sayfa</Text>
      </View>
  );
}

export default HomePageScreen;