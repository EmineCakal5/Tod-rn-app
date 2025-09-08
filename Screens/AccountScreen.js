import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AccountScreen({navigation}) {

  return (
    <View style={{flex: 1, backgroundColor:'black' , alignItems:'center'}}>
      <Text style={{fontSize: 24, color:"white", fontWeight:'normal', }}>HESABIM</Text>

    </View>
  );
}

export default AccountScreen;
