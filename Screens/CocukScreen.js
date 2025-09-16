import React from "react";
import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ChevronRight, Tv } from 'lucide-react-native';

export default function CocukScreen({ navigation }) {

  const [childrens, setChildrens] = useState([]);

  useEffect(() => {
    const fetchChildrens = async () => {
      try {
        const childrenRes = await fetch
          ('https://api.themoviedb.org/3/discover/tv?api_key=ec55e243a5f3dc4d8ba5a4bedbfb52bd&with_genres=10762&language=tr-TR');
        const childrenData = await childrenRes.json();
        setChildrens(childrenData.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchChildrens();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={{ alignItems: 'center', position: 'relative' }}>
        <Text style={{ fontSize: 22, marginVertical: 10, color: 'white', fontWeight: 'bold', position: 'absolute', backgroundColor: 'transparent', zIndex: 90 }}>ÇOCUK</Text>
      </View>
      <View style={{ padding: 10, alignItems: 'center', position: 'relative' }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            position: 'absolute',
            zIndex: 10,
           
          }}
          pagingEnabled
          snapToInterval={420}
        > 
          {childrens.slice(7, 14).map((childrens) => (
            <View key={childrens.id} style={{ alignItems: "center" }}>
              <TouchableOpacity
                key={childrens.id}
                onPress={() => navigation.navigate('DiziScreen', { childrensId: childrens.id })}
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${childrens.poster_path}` }}
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
      </View>
    </ScrollView>
  );
}