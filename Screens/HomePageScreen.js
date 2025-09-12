import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const posterWidth =screenWidth * 1;
const posterHight = posterWidth * 1;

function HomePageScreen({ navigation }) {

  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=ec55e243a5f3dc4d8ba5a4bedbfb52bd&language=tr-TR'
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (

    <ScrollView style={{ backgroundColor: 'black' }}>

      <View style={{ padding: 10, alignItems: 'center', position: 'relative' }}>

      <Text style={{ color: 'yellow', fontSize: 22, marginVertical: 10, fontWeight: 'bold',  position: 'absolute', backgroundColor: 'transparent', zIndex:10 }}>TOD</Text>

           <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            position:'absolute',
            zIndex:10,
            marginTop:40,
            
          }}

        >
          <View style={{ flexDirection: 'row' }}>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'transparent',
                  padding: 10,
                  borderRadius: 5,
                  marginRight: 10,

                }}
                onPress={() => navigation.navigate('FilmScreen')}

              >

                <Text style={{ color: 'white', fontWeight: 'bold' }}>FİLM</Text>
              </TouchableOpacity>
            </View>


            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'transparent',
                  padding: 10,
                  borderRadius: 5,
                  marginRight: 10,
                }}
                onPress={() => navigation.navigate('DiziScreen')}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>DİZİ</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'transparent',
                  padding: 10,
                  borderRadius: 5,
                  marginRight: 10,
                }}
                onPress={() => navigation.navigate('SporScreen')}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>SPOR</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'transparent',
                  padding: 10,
                  borderRadius: 5,
                  marginRight: 10,
                }}
                onPress={() => navigation.navigate('CocukScreen')}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>ÇOCUK</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'transparent',
                  padding: 10,
                  borderRadius: 5,
                  marginRight: 10,
                }}
                onPress={() => navigation.navigate('CanliTVScreen')}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>CANLI TV</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>

    //1. Poster kısmı
        <View style={{ }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={screenWidth}
          
  
          >
            {movies.slice(7, 14).map((movie) => (
              <TouchableOpacity
                key={movie.id}
                onPress={() => navigation.navigate('FilmScreen', { movieId: movie.id })}
               
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                  style={{ width: posterWidth , height: posterHight}}
                    resizeMode='stretch'
                     
                    
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>


        

    {/* //2. Poster kısmı
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false} >
            {movies.slice(0,7).map((movie) => (
              <TouchableOpacity
                key={movie.id}
                onPress={() => navigation.navigate('FilmScreen', { movieId: movie.id })}
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                  style={{ width: 300, height: 200, borderRadius: 8}}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View> */}

{/* //3. Poster kısmı
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}

          >
            {movies.slice(7, 14).map((movie) => (
              <TouchableOpacity
                key={movie.id}
                onPress={() => navigation.navigate('FilmScreen', { movieId: movie.id })}
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                  style={{ width: 40, height: 30, marginTop: 50 }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
 
      </View> */}
    //</View></ScrollView>
  );
}

export default HomePageScreen;