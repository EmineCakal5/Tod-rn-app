import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';

function ListScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor:'black' }}>
      <Text style={{fontSize: 24, color:'white', fontWeight:'bold', marginTop: -4}}>Listelerim</Text>
    </View>
  );
}

export default ListScreen;