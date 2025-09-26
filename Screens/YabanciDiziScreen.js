import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
export default function YabanciDiziScreen({ navigation }) {

  const [tvShows, setTvShows] = useState([]);
  const [fawTvShows, setFawTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const [tvRes, fawRes] = await Promise.all([
          fetch('https://api.themoviedb.org/3/tv/popular?api_key=ec55e243a5f3dc4d8ba5a4bedbfb52bd&language=tr-TR'),
          fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=ec55e243a5f3dc4d8ba5a4bedbfb52bd&language=tr-TR')
        ]);

        const tvData = await tvRes.json();
        setTvShows(tvData.results);

        const fawTvData = await fawRes.json();
        setFawTvShows(fawTvData.results);

      } catch (error) {
        console.error(error);
      }
    };
    fetchTvShows();
  }, []);
  return (

    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={{ flex: 1 }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: -48,

        }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('TopDiziScreen', { tvShows })}>
            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Aksiyon-Suç</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TopDiziScreen', { tvShows })}
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

          {tvShows.slice(0, 8).map((tv) => (
            <View key={tv.id} >
              <TouchableOpacity

                style={{
                  width: 150,
                  height: 225,
                  marginRight: 10,
                  borderWidth: 4,
                  borderRadius: 15,
                  backgroundColor: '#1f1d17'
                }}
                onPress={() => navigation.navigate('DiziDetailScreen', { tv })}
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
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: -39,

        }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('TopDiziScreen', { tvShows })}>
            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Drama</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TopDiziScreen', { tvShows })}
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

          {tvShows.slice(8, 16).map((tv) => (
            <View key={tv.id} >
              <TouchableOpacity

                style={{
                  width: 150,
                  height: 225,
                  marginRight: 10,
                  borderWidth: 4,
                  borderRadius: 15,
                  backgroundColor: '#1f1d17'
                }}
                onPress={() => navigation.navigate('DiziDetailScreen', { tv })}
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
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>


        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: -39,

        }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('TopDiziScreen', { tvShows })}>
            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Komedi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TopDiziScreen', { tvShows })}
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
          showsHorizontalScrollIndicator={false}
        >
          {fawTvShows.slice(9, 20).map((tv) => (
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
              <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', alignItems: 'center', textAlign: 'center', marginTop: 5 }}>
                {tv.name}
              </Text>

            </TouchableOpacity>


          ))}
        </ScrollView>
      </View>
    </ScrollView>


  )
}