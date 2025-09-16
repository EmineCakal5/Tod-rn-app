import React from "react";
import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ChevronRight, Tv } from 'lucide-react-native';


export default function DiziScreen({ navigation }) {

  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const tvRes = await fetch
          ('https://api.themoviedb.org/3/tv/popular?api_key=ec55e243a5f3dc4d8ba5a4bedbfb52bd&language=tr-TR');
        const tvData = await tvRes.json();
        setTvShows(tvData.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTvShows();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={{ padding: 10, alignItems: 'center', position: 'relative' }}>
        <Text style={{ fontSize: 22, marginVertical: 10, color: 'white', fontWeight: 'bold', position: 'absolute', backgroundColor: 'transparent', zIndex: 10 }}>DİZİ</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            position: 'absolute',
            zIndex: 10,
            marginTop: 40,
          }}
        >
          <View style={{ flexDirection: 'row', backgroundColor: 'transparent' }}>
            <TouchableOpacity
              style={{
                padding: 10,
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
                padding: 10,
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
                padding: 10,
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
                padding: 10,
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
                padding: 10,
                borderRadius: 5,
                marginRight: 10,
              }}
              onPress={() => alert('Betimleme')}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Betimleme</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View>
          <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      pagingEnabled
                      snapToInterval={420}
                    >
                      {tvShows.slice(7, 14).map((tv) => (
                        <View key={tv.id} style={{ alignItems: "center" }}>
                          <TouchableOpacity
                            key={tv.id}
                            onPress={() => navigation.navigate('DiziScreen', { tvId: tv.id })}
                          >
                            <Image
                              source={{ uri: `https://image.tmdb.org/t/p/w500${tv.poster_path}` }}
                              style={{ width: 420, height: 350 }}
                              resizeMode='stretch'
                            />
                          </TouchableOpacity>
                        </View>
                      ))}
                    </ScrollView>
                    <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: -31,
                    
                              }}
                              >
                                <TouchableOpacity
                                  onPress={() => navigation.navigate('FormulaScreen')}>
                                  <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Öne Çıkanlar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => navigation.navigate('FormulaScreen')}
                                  style={{ marginTop: 70, borderWidth: 1, backgroundColor: '#1f1d17', borderRadius: 17, padding: 4 }} >
                                  <ChevronRight
                                    size={22}
                                    color="gray"
                                    fontWeight='bold'
                                  />
                                </TouchableOpacity>
                              </View>
                    
                            
                              <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false} >
                    
                                {tvShows.slice(8,15).map((tv) => (
                                  <View
                                    key={tv.id}
                                    style={{
                                      width: 150,
                                      height: 225,
                                      marginRight: 10,
                                      borderWidth: 4,
                                      borderRadius: 15,
                                      backgroundColor: '#1f1d17'
                                    }}
                                    onPress={() => navigation.navigate('DiziScreen', {tvId: tv.id })}
                                  >
                                    <Image
                                      source={{ uri: `https://image.tmdb.org/t/p/w500${tv.poster_path}` }}
                                      style={{ width: '100%', height: 180 }}
                                      resizeMode='stretch'
                                    />
                                    <Text style={{
                                      color: 'white',
                                      fontSize: 12,
                                      marginTop: 5,
                                      marginBottom: 5,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      textAlign: 'center',
                    
                                    }}> {tv.name} </Text>
                                  </View>
                                ))}
                              </ScrollView>
        </View>
      </View>
      </ScrollView>
      );
}