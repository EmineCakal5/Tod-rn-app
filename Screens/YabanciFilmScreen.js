import { View, ScrollView, Text, TouchableOpacity , Image} from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import {useState, useEffect } from 'react';
export default function YabanciFilmScreen({navigation}) {

    const [movie, setMovie] = useState([]);
    const [childrens, setChildrens] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            try{
                const [movieRes, res] = await Promise.all([
                    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ec55e243a5f3dc4d8ba5a4bedbfb52bd&language=tr-TR'
                ),
                fetch('https://api.sampleapis.com/cartoons/cartoons2D'),
            ]);
                const movieData = await movieRes.json();
                 setMovie(movieData.results);

                 const data = await res.json();
                setChildrens(data);
            }
            catch (error) {
             console.error('Fetch error:', error);               
            }
        };
        fetchMovie();
    }, []);
     
    return (
        <ScrollView style={{backgroundColor:'black'}}>
        <View style={{flex:1}}>
            <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: -48,

          }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('AksiyonScreen', {movie})}>
              <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Aksiyon</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('AksiyonScreen', {movie})}
              style={{ marginTop: 70, borderWidth: 1, backgroundColor: '#1f1d17', borderRadius: 17, padding: 4 }} >
              <ChevronRight
                size={22}
                color="gray"
                fontWeight='bold'
              />
            </TouchableOpacity>
          </View>

          {/*1.Poster*/}

          <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false} >
          
                      {movie.slice(0,8).map((movie) => (
                        <View key={movie.id} >
                          <TouchableOpacity
                          
                          style={{
                            width: 150,
                            height: 225,
                            marginRight: 10,
                            borderWidth: 4,
                            borderRadius: 15,
                            backgroundColor: '#1f1d17'
                          }}
                          onPress={() => navigation.navigate('MovieDetailScreen', {movie})}
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
                        </TouchableOpacity>
                        </View>
                      ))}
                    </ScrollView>

                     <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:-39,

          }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('BilimKurguScreen', {movie})}>
              <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Bilim Kurgu-Fantastik</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('BilimKurguScreen', {movie})}
              style={{ marginTop: 70, borderWidth: 1, backgroundColor: '#1f1d17', borderRadius: 17, padding: 4 }} >
              <ChevronRight
                size={22}
                color="gray"
                fontWeight='bold'
              />
            </TouchableOpacity>
          </View>

          {/*2.Poster*/}

          <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false} >
          
                      {movie.slice(9,16).map((movie) => (
                        <View key={movie.id} >
                          <TouchableOpacity
                          
                          style={{
                            width: 150,
                            height: 225,
                            marginRight: 10,
                            borderWidth: 4,
                            borderRadius: 15,
                            backgroundColor: '#1f1d17'
                          }}
                          onPress={() => navigation.navigate('MovieDetailScreen', {movie})}
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
                        </TouchableOpacity>
                        </View>
                      ))}
                    </ScrollView>

                    <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:-39
            

          }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('AnimasyonScreen', {childrens})}>
              <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Animasyon</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('AnimasyonScreen', {childrens})}
              style={{ marginTop: 70, borderWidth: 1, backgroundColor: '#1f1d17', borderRadius: 17, padding: 4 }} >
              <ChevronRight
                size={22}
                color="gray"
                fontWeight='bold'
              />
            </TouchableOpacity>
          </View>

          {/*3.Poster*/}

          <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false} >
          
                      {childrens.slice(2,8).map((children) => (
                        <View key={children.id} >
                          <TouchableOpacity
                          
                          style={{
                            width: 150,
                            height: 225,
                            marginRight: 10,
                            borderWidth: 4,
                            borderRadius: 15,
                            backgroundColor: '#1f1d17'
                          }}
                          onPress={() => navigation.navigate('CocukDetailScreen', {children})}
                        >
                          <Image
                            source={{ uri: children.image }}
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
          
                          }}> {children.title} </Text>
                        </TouchableOpacity>
                        </View>
                      ))}
                    </ScrollView>

                    
        </View>
        </ScrollView>
    )
}