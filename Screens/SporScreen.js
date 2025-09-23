import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronRight } from "lucide-react-native";

const Categories = ['Özetler','Yarışlar','Antrenman ','Sıralama ','Finishline'];
export default function SporScreen({ navigation }) {

  const [sports, setSport] = useState([]);

  useEffect(() => {
    const fetchSports = async () => {

      axios.get('http://10.0.2.2:3333/todmena/sports').then((response) => {
        setSport(response.data);
      }).catch((error) => { console.log(error) });

    }
    fetchSports();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{  alignItems: 'center', position: 'relative' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginTop: 4, backgroundColor:'transparent', position:'absolute', zIndex:10 }}>SPOR</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          position: 'absolute',
          zIndex: 10,
          marginTop: 40,
          marginLeft: 60
          
        }}
      >
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'transparent',
              padding: 10,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('Haftanın Maçları')}

          >

            <Text style={{ color: 'white', fontWeight: 'bold' }}>Haftanın Maçları</Text>
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
            onPress={() => alert('Spor Programları')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Spor Programları</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/*1. Poster kısmı*/}
      <View style={{ flex: 2 }}>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToInterval={400}
          >
            {sports?.data?.map((sports) => {
              return (<View key={sports.id} style={{ alignItems: "center" }}>
                <TouchableOpacity
                  key={sports.id}
                  onPress={() => navigation.navigate('SporDetailsScreen', { sportsId: sports.id })}
                >
                  <Image
                    source={{ uri: sports.posterUrl }}
                    style={{ width: 400, height: 350 }}
                    resizeMode='stretch'

                  />
                </TouchableOpacity>
              </View>)
            }
            )}
          </ScrollView>
        </View>
      </View>

      {/*2. Poster Kısmı*/}
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


    </ScrollView>
  );
}