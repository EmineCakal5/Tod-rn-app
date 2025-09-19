import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';


const genreMap = {
    10759: "Action & Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    37: "Western"
};

export default function DiziDetailScreen({ route }) {

    const { tv } = route.params;
    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <View style={{ padding: 10, alignItems: 'center', position: 'relative' }}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${tv.poster_path}` }}
                    style={{ width: 400, height: 350 }}
                    resizeMode='stretch'
                />
                <View style={{}}>
                    <Text style={{ fontSize: 22, marginTop: 12, textAlign: 'left', color: 'white', fontWeight: 'bold', position: 'absolute', backgroundColor: 'transparent', zIndex: 90 }}>{tv.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <Image source={require('../Assets/MovieRoll.png')} style={{ width: 29, height: 25, marginLeft: 0, marginTop: 30 }} />
                        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 30 }}>{genreMap[tv.genre_ids[0]]}</Text>
                    </View>
                    <Text style={{ fontSize: 14, marginVertical: 10, color: 'white', marginTop: 27 }}>{tv.overview}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'blue',
                        padding: 10,
                        borderRadius: 19,
                        marginTop: 16,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 378
                    }}
                    onPress={() => Alert.alert('Play button pressed')}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5 }}>İzlemeye Başla</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}   
