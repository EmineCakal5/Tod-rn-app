import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ListScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black' }}>
      <Text style={{fontSize: 14}}>List Screen</Text>
    </View>
  );
}

export default ListScreen;