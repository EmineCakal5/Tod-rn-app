import { Tv } from "lucide-react-native";
import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function TopDiziWeekScreen({ route, navigation }) {
    const { fawTvShows } = route.params;
     return (
        <View style={{ flex:1,backgroundColor:'black', justifyContent:'center'}}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginTop: 5, marginBottom:10, textAlign:'left',marginLeft:14 }}>En Çok İzlenen Diziler</Text>
            <ScrollView
            showsHorizontalScrollIndicator={false}>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                {fawTvShows.slice(9,20).map((fawTv) => (
                    <TouchableOpacity
                        key={fawTv.id}
                        style= {{
                            width: 140,
                            height: 220,
                            marginLeft:42,
                            marginBottom:14,    
                            borderRadius: 10,
                            backgroundColor: '#1f1d17',
                        }}
                        onPress={() => navigation.navigate('DiziDetailsScreen', { fawTv })}
                    >
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500${ fawTv.poster_path}` }}
                            style={{
                                width: '100%', height: 185
                            }}
                             resizeMode="cover"
                        />
                        <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', alignItems:'center', textAlign:'center', marginTop: 5 }}>
                            {fawTv.name}
                        </Text>
                        </TouchableOpacity>
                ))}
            </View>
            </ScrollView>
        </View>
    );
}