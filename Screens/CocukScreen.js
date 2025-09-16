import React from "react";
import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ChevronRight, Tv } from 'lucide-react-native';
import axios from "axios";

export default function CocukScreen({ navigation }) {

  const [childrens, setChildrens] = useState([]);

  useEffect(() => {
    const fetchChildrens = async () => {

     axios.get('http://10.0.2.2:3333/todmena/boxsets').then((response) => {
        setChildrens(response.data);  
      }).catch((error) => {console.log(error)});

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
            zIndex: 10,

          }}
          pagingEnabled
          snapToInterval={420}
        >
          {childrens?.data?.map((childrens) => {
            return (  <View key={childrens.id} style={{ alignItems: "center" }}>
              <TouchableOpacity
                key={childrens.id}
                onPress={() => navigation.navigate('DiziScreen', { childrensId: childrens.id })}
              >
                <Image
                  source={{ uri: childrens.posterUrl }}
                  style={{ width: 420, height: 350 }}
                  resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>)
          })}
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