import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function AksiyonScreen({ route, navigation }) {

    const { movie } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginTop: 5, marginBottom: 10, textAlign: 'left', marginLeft: 14 }}>Yabancı film-Aksiyon</Text>
            <ScrollView
                showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {movie.slice(0, 8).map((movie) => (
                        <TouchableOpacity
                            key={movie.id}
                            style={{
                                width: 140,
                                height: 220,
                                marginLeft: 42,
                                marginBottom: 14,
                                borderRadius: 10,
                                backgroundColor: '#1f1d17',
                            }}
                            onPress={() => navigation.navigate('MovieDetailScreen', { movie })}
                        >
                            <Image
                                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                                style={{
                                    width: '100%', height: 185
                                }}
                                resizeMode="cover"
                            />
                            <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', alignItems: 'center', textAlign: 'center', marginTop: 5 }}>
                                {movie.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

