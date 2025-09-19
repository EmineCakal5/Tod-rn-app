import { Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';

export default function TopFilmWeekScreen({ route, navigation }) {

    const { fawMovies } = route.params;
    return (
        <View style={{ flex:1,backgroundColor:'black', justifyContent:'center'}}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginTop: 5, marginBottom:10, textAlign:'left',marginLeft:14 }}>Bu Hafta En Çok İzlenen Filmler</Text>
            <ScrollView
            showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                {fawMovies.slice(1,5).map((faw) => (
                    <TouchableOpacity
                        key={faw.id}
                        style= {{
                            width: 140, 
                            height: 220,
                            marginLeft:42,
                            marginBottom:14,
                            borderRadius: 10,
                            backgroundColor: '#1f1d17',
                        }}
                        onPress={() => navigation.navigate('MovieDetailScreen', { movie: faw })}
                    >   
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500${faw.poster_path}` }}
                            style={{
                                width: '100%', height: 185
                            }}
                                resizeMode="cover"
                        />
                        <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', alignItems:'center', textAlign:'center', marginTop: 5 }}>
                            {faw.title}
                        </Text>
                        </TouchableOpacity>
                ))}
            </View>
            </ScrollView>
        </View>
    );
}
