import React from "react";
import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { ChevronRight, Tv } from 'lucide-react-native';



export default function FilmScreen({ navigation }) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesRes = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=ec55e243a5f3dc4d8ba5a4bedbfb52bd&language=tr-TR'
        );
        const moviesData = await moviesRes.json();
        setMovies(moviesData.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);


  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={{ padding: 10, alignItems: 'center', position: 'relative' }}>
        <Text style={{ fontSize: 22, marginVertical: 10, color: 'white', fontWeight: 'bold', position: 'absolute', backgroundColor: 'transparent', zIndex: 10 }}>FİLM</Text>

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
              onPress={() => alert('Yabancı Film')}

            >

              <Text style={{ color: 'white', fontWeight: 'bold' }}>Yabancı Film</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                padding: 10,
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
                padding: 10,
                borderRadius: 5,
                marginRight: 10,
              }}
              onPress={() => alert('Animasyon')}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Betimleme</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/*1. Poster kısmı*/}

        <View style={{ flex: 2 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={420}
          >
            {movies.slice(7, 14).map((movie) => (
              <View key={movie.id} style={{ alignItems: "center" }}>
                <TouchableOpacity
                  key={movie.id}
                  onPress={() => navigation.navigate('FilmScreen', { movieId: movie.id })}
                >
                  <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    style={{ width: 420, height: 350 }}
                    resizeMode='stretch'
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>


          {/*2.Poster kısmı*/}


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

            {movies.slice(8,15).map((movie) => (
              <View
                key={movie.id}
                style={{
                  width: 150,
                  height: 225,
                  marginRight: 10,
                  borderWidth: 4,
                  borderRadius: 15,
                  backgroundColor: '#1f1d17'
                }}
                onPress={() => navigation.navigate('DiziScreen', {movieId: movie.id })}
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
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

                }}> {movie.title} </Text>
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
              <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Bu Hafta En Çok İzlenenler</Text>
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

            {movies.slice(14,29).map((movie) => (
              <View
                key={movie.id}
                style={{
                  width: 150,
                  height: 225,
                  marginRight: 10,
                  borderWidth: 4,
                  borderRadius: 15,
                  backgroundColor: '#1f1d17'
                }}
                onPress={() => navigation.navigate('DiziScreen', {movieId: movie.id })}
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
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

                }}> {movie.title} </Text>
              </View>
            ))}
          </ScrollView>

          </View>


        </View>

    
    </ScrollView>
  );
}
