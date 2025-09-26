import { TouchableOpacity } from 'react-native';
import { Text, View, ScrollView, Image } from 'react-native';

export default function EnCokIzlenenlerScreen({ route, navigation }) {

    const { tvShows } = route.params;
    return (
        <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView
                showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {tvShows.slice(9, 20).map((tv) => (
                        <TouchableOpacity
                            key={tv.id}
                            style={{
                                width: 140,
                                height: 220,
                                marginLeft: 42,
                                marginBottom: 14,
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
                            />
                            <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', alignItems: 'center', textAlign: 'center', marginTop: 5 }}>
                                {tv.name}
                            </Text>
                        </TouchableOpacity>

                    ))}
                </View>
            </ScrollView>

        </View>
    );
}