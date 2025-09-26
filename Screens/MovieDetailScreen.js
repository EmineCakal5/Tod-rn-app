import { Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

const genreMap = {
    12: "Macera",
    14: "Fantastik",
    16: "Animasyon",
    18: "Dram",
    27: "Korku",
    28: "Aksiyon",
    35: "Komedi",
    36: "Tarih",
    53: "Gerilim",
    80: "Suç",
    10749: "Romantik",
    878: "Bilim Kurgu",
    9648: "Gizem",
    10402: "Müzik",
    10752: "Savaş",
    10751: "Aile"
};

export default function MovieDetailScreen({ route, navigation }) {
    const { movie } = route.params;
    return (
        <ScrollView style={{ backgroundColor: 'black' }}>

            <View style={{ padding: 10, alignItems: 'center', position: 'relative' }}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    style={{ width: 410, height: 350 }}
                    resizeMode='stretch'
                />
                <View style={{}}>
                    <Text style={{ fontSize: 22, marginTop: 12, textAlign: 'left', color: 'white', fontWeight: 'bold', position: 'absolute', backgroundColor: 'transparent', zIndex: 90 }}>{movie.title}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <Image source={require('../Assets/movieIcon.png')} style={{ width: 29, height: 25, marginLeft: 0, marginTop: 30 }} />
                        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 30 }}> {movie.release_date?.split("-")[0]}</Text>
                        <Image source={require('../Assets/MovieRoll.png')} style={{ width: 35, height: 36, marginLeft: 7, marginTop: 30 }} />
                        <Text style={{ color: 'white', marginTop: 30, marginLeft: -11, fontWeight: 'bold' }}>   {genreMap[movie.genre_ids[0]]}</Text>
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
                        onPress={() => navigation.navigate('VideoPlayerScreen')}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5 }}>İzle</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: 'black',
                            padding: 10,
                            borderRadius: 19,
                            borderWidth: 1,
                            borderColor: 'white',
                            marginTop: 16,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 378
                        }}
                        onPress={() => Alert.alert('Play button pressed')}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5 }}>Fragmanı İzle</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 14, marginVertical: 10, color: 'white' }}>{movie.overview}</Text>

                </View>
            </View>
        </ScrollView>
    );
}
