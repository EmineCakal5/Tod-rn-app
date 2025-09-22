import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { ChevronRight, Tv } from 'lucide-react-native';

const Categories = ['Özetler','Yarışlar','Antrenman ','Sıralama ','Finishline'];
function HomePageScreen({ navigation }) {

  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [moviesRes, tvRes] = await Promise.all([
          fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=ec55e243a5f3dc4d8ba5a4bedbfb52bd&language=tr-TR'),
          fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=ec55e243a5f3dc4d8ba5a4bedbfb52bd&language=tr-TR') 
        ]);
        const moviesData = await moviesRes.json();
        setMovies(moviesData.results);
        const tvData = await tvRes.json();
        setTvShows(tvData.results);

      } catch (error) {
        console.error(error);

      }
    };

    fetchMovies();
  }, []);

  return (

    <ScrollView style={{ backgroundColor: 'black' }}>

      <View style={{ padding: 10, alignItems: 'center', position: 'relative' }}>

        <Text style={{ color: '#ffcb39', fontSize: 22, marginVertical: 10, fontWeight: 'bold', position: 'absolute', backgroundColor: 'transparent', zIndex: 10 }}>TOD</Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            position: 'absolute',
            zIndex: 10,
            marginTop: 40,

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



        {/*1. Poster kısmı*/}
        <View style={{ flex: 2 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={400}
          >
            {movies.slice(7, 14).map((movie) => (
              <View key={movie.id} style={{ alignItems: "center" }}>
                <TouchableOpacity
                  key={movie.id}
                  onPress={() => navigation.navigate('MovieDetailScreen', { movie })}
                >
                  <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    style={{ width: 400, height: 350 }}
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
            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Formula 1</Text>
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


          {/*2. Poster kısmı*/}

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
                  width: 150,
                  height: 220,
                  marginRight: 10,
                  borderWidth: 4,
                  borderRadius: 15,
                  backgroundColor: '#1f1d17'
                }}
              >
                <Image
                  source={{ uri: url }}
                  style={{ width: '100%', height: 185 }}
                  resizeMode='cover'
                />
                <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', textAlign: 'center', marginTop: 5 ,alignItems:'center'}}>
                  Formula 1 {Categories[index]}
                </Text>
              </View> 
            ))}
          </ScrollView>
        {/*</View>*/}


        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop:13
          
        }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('EnCokIzlenenlerScreen', {tvShows})}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>En Çok İzlenenler </Text>
            </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('EnCokIzlenenlerScreen', {tvShows})}
            style={{  borderWidth: 1, backgroundColor: '#1f1d17', borderRadius: 17, padding: 4, marginLeft:209 }} >
            <ChevronRight
              size={22}
              color="gray"
              fontWeight='bold'
            />
          </TouchableOpacity>
        </View>


        {/*3. Poster kısmı*/}
        {/*<View>*/}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {tvShows.slice(9,20).map((tv) => (
              <TouchableOpacity
                key={tv.id}
                style={{
                  width: 150,
                  height: 220,
                  marginRight: 10,
                  borderWidth: 4,
                  borderRadius: 15,
                  backgroundColor: '#1f1d17'
                }}
                onPress={() => navigation.navigate('DiziDetailsScreen', { tv })}
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${tv.poster_path}` }}
                  style={{
                   width: '100%', height: 185
                  }}
                />
                <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', alignItems:'center', textAlign:'center', marginTop: 5 }}>
                  {tv.name}
                </Text>
               
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
      </View>
    </ScrollView>
  );
}

export default HomePageScreen;