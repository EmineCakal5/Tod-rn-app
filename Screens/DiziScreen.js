import React from "react";
import { View, Text, StyleSheet, Alert, ScrollView, TouchableOpacity } from "react-native";

export default function DiziScreen({navigation}) {
  return (
    <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize:24, fontWeight:'bold', color: 'white', marginTop: -4}}>DİZİ</Text>
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
                      onPress={() => alert('Yabancı dizi')}
                    
                      >
                      
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Yabancı Dizi</Text>
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
                      onPress={() => alert('Yerli Dizi')}
                      >
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Yerli Dizi</Text>
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
                      onPress={() => alert('Belgesel')}
                      >
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Belgesel</Text>
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
                      onPress={() => alert('Eğlence')}
                      >
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Eğlence-Yaşam</Text>
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
                      onPress={() => alert('Betimleme')}
                      >
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Betimleme</Text>
                      </TouchableOpacity>
                      </View>                                          
                    </ScrollView>
      </View>
  );
}