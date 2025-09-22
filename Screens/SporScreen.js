import { View, Text, Image,TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";

export default function SporScreen({ navigation }) {

  const [spor, setSpor] = useState([]);

  useEffect(() => {
    const fetchSpor = async () => {
      try {
        const sporRes = await fetch('https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal');

        const sporData = await sporRes.json();
        setSpor(sporData.teams);

      } catch (error) {
        console.error(error);
      }
    };
    fetchSpor();
  }, []);

  return (
    <ScrollView style={{backgroundColor: 'black', flex: 1}}>
    <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize:24, fontWeight:'bold', color: 'white', marginTop: -4}}>SPOR</Text>
      <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                    <View>
                     <TouchableOpacity
                      style={{
                        backgroundColor: 'black',
                        padding: 20,
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
                       backgroundColor: 'black',
                        padding: 20,
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

                    <View >
                              <View style={{ flex: 2 }}>
                                <ScrollView
                                  horizontal={true}
                                  showsHorizontalScrollIndicator={false}
                                  pagingEnabled
                                  snapToInterval={400}
                                >
                                  {spor && spor.map((team) => (
                                    <View key={team.idTeam} style={{ alignItems: "center" }}>
                                      <TouchableOpacity
                                        key={team.idTeam}
                                        onPress={() => Alert.alert(team.strTeam)}
                                      >
                                        <Image
                                          source={{ uri: team.strTeamBadge }}
                                          style={{ width: 400, height: 350 }}
                                          resizeMode='stretch'
                                        />
                                      </TouchableOpacity>
                                    </View>
                                  ))}
                                </ScrollView>
                                </View>
                                </View>
                    
      </View>
    </ScrollView>
  );
}