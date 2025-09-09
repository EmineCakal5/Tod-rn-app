import React from "react";
import { View, Text, StyleSheet, alert,TouchableOpacity, ScrollView } from "react-native";

export default function DiziScreen() {
  return (
    <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize:24, fontWeight:'bold', color: 'white', marginTop: -4}}>SPOR</Text>
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
                      onPress={() => alert('Haftanın Maçları')}
                    
                      >
                      
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Haftanın Maçları</Text>
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
                      onPress={() => alert('Spor Programları')}
                      >
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Spor Programları</Text>
                      </TouchableOpacity>
                      </View>
                    </ScrollView>
      </View>
  );
}