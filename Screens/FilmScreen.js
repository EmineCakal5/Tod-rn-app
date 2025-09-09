import React from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { TouchableOpacity } from 'react-native';

export default function FilmScreen({navigation}) {
  return (
    <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize:24, fontWeight:'bold', color: 'white', marginTop: -4}}>FİLM</Text>
      <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >
              <View>
               <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  padding: 20,
                  borderRadius: 5,
                  marginRight: 10,
                }}
                onPress={() => alert('Yabancı Film')}
              
                >
                
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Yabancı Film</Text>
                </TouchableOpacity>
                </View>
                <View>
               <TouchableOpacity
                style={{
                 backgroundColor: 'black',
                  padding: 20,
                  borderRadius: 5,
                  marginRight: 10,
                }}
                onPress={() => alert('Yerli Film')}
                >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Yerli Film</Text>
                </TouchableOpacity>
                </View>
               <View>
               <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  padding: 20,
                  borderRadius: 5,
                  marginRight: 10,
                }}
                onPress={() => alert('Animasyon')}
                >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Betimleme</Text>
                </TouchableOpacity>
                </View>
              </ScrollView>
      </View>
  );
}
