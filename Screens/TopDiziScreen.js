import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function TopDiziScreen({ route, navigation }) {

  const {  tvShows} = route.params;

    return (
        <View style={{ flex:1,backgroundColor:'black', justifyContent:'center'}}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginTop: 5, marginBottom:10, textAlign:'left',marginLeft:14 }}>Öne Çıkanlar</Text>
            <ScrollView
            showsHorizontalScrollIndicator={false}>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                {tvShows.slice(8,15).map((tv) => (
                    <TouchableOpacity
                        key={tv.id}
                        style= {{
                            width: 140,
                            height: 220,
                            marginLeft:42,
                            marginBottom:14,    
                            borderRadius: 10,
                            backgroundColor: '#1f1d17',
                        }}
                        onPress={() => navigation.navigate('DiziDetailsScreen', { tv })}
                    >
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500${tv.poster_path}` }}
                            style={{
                                width: '100%', height: 185
                            }}
                             resizeMode="cover"
                        />
                        <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', alignItems:'center', textAlign:'center', marginTop: 5 }}>
                            {tv.name}
                        </Text>
                        </TouchableOpacity>
                ))}
            </View>
            </ScrollView>
        </View>
    );
}
            