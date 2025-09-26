import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

export default function DiziScreen({ navigation }) {

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
              onPress={() => navigation.navigate('DiziTab', { screen: "YabanciDizi" })}
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
              onPress={() => navigation.navigate('DiziTab', { screen: "YerliDizi" })}
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
              onPress={() => navigation.navigate('DiziTab', { screen: "Belgesel" })}
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
              onPress={() => navigation.navigate('DiziTab', { screen: "EglenceDizi" })}
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
              onPress={() => navigation.navigate('DiziTab', { screen: "BetimlemeDiziScreen" })}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Betimleme</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/*1. Poster kısmı*/}

        <View style={{ flex: 2 }}>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              snapToInterval={400}
            >
              {tvShows.slice(7, 14).map((tv) => (
                <View key={tv.id} style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('DiziDetailsScreen', { tv })}
                  >
                    <Image
                      source={{ uri: `https://image.tmdb.org/t/p/w500${tv.poster_path}` }}
                      style={{ width: 400, height: 350 }}
                      resizeMode='stretch'
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>

            {/*2. Poster kısmı*/}

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: -53,

            }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('TopDiziScreen', { tvShows })}>
                <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Öne Çıkanlar</Text>
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


            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false} >

              {tvShows.slice(8, 15).map((tv) => (
                <View key={tv.id} style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      width: 150,
                      height: 225,
                      marginRight: 10,
                      borderWidth: 4,
                      borderRadius: 15,
                      backgroundColor: '#1f1d17'
                    }}
                    onPress={() => navigation.navigate('DiziDetailsScreen', { tv })}
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

            {/*3. Poster kısmı*/}

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: -31,

            }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('TopDiziWeekScreen', { fawTvShows })}>
                <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Bu Hafta En Çok İzlenenler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('TopDiziWeekScreen', { fawTvShows })}
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
        </View>
      </View>
    </ScrollView>
  );
}
