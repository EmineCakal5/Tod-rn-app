import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

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

      <Text style={{ color: '#ffcb39', fontSize: 22, marginVertical: 10, fontWeight: 'bold',  position: 'absolute', backgroundColor: 'transparent', zIndex:10 }}>TOD</Text>

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
            {movies.slice(7,14).map((movie) => (
              <View key={movie.id} style={{ width: screenWidth, alignItems: "center" }}>
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
              </View>
            ))}
          </ScrollView>
        

        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
      
        }}
        >
        <Text style={{ color: 'white', fontWeight: 'bold', marginTop:40, fontSize:16}}>Formula 1</Text>   
        <TouchableOpacity
        onPress={() => navigation.navigate('FormulaScreen')}
        style={{marginTop:37, borderWidth:1, backgroundColor:'#1f1d17', borderRadius:17, padding:4}} >
           <ChevronRight 
           size={22} 
           color="gray" 
           fontWeight= 'bold'
           />
        </TouchableOpacity>
         </View>
        

    //2. Poster kısmı
        
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false} >

          {[
            'https://mediacms01.digiturkplay.com/sa_bc/PZ0000007969/formula1-ozetler-25-son_220x286.jpg',
            'https://mediacms01.digiturkplay.com/sa_bc/PZ0000007967/formula1-yarislar-25-son_220x286.jpg',
            'https://mediacms01.digiturkplay.com/sa_bc/PZ0000007984/formula1-antrenman-seansi-25-son_220x286.jpg',
            'https://mediacms01.digiturkplay.com/sa_bc/PZ0000007968/formula1-siralama-turlari-25-son_220x286.jpg',
            'https://mediacms01.digiturkplay.com/sa_bc/PZ0000007972/finish-line-2024_220x286.jpg',
          ].map((url, index) => (
            <View
            key={index}
            style={{
              width:150,
              height:220,
              marrginRight:10,
              borderWidth:4,
              borderRadius:15,
              overflow:'hidden',
              backgroundColor:'black'
            }}
            >
              <Image
              source={{uri: url}}
              style={{width:'100%', height:180}}
              resizeMode='cover'
              />
            <Text style={{ color: 'white', marginTop: 5, fontSize: 12 }}>
              Poster {index + 1}
            </Text>
            </View>
          ))}                                                     
          </ScrollView>
        </View>

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