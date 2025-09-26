import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function AnimasyonScreen({ route, navigation }) {

    const { childrens } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginTop: 5, marginBottom: 10, textAlign: 'left', marginLeft: 14 }}>Yabancı film-Animasyon</Text>
            <ScrollView
                showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {childrens.slice(2, 8).map((children) => (
                        <TouchableOpacity
                            key={children.id}
                            style={{
                                width: 140,
                                height: 220,
                                marginLeft: 42,
                                marginBottom: 14,
                                borderRadius: 10,
                                backgroundColor: '#1f1d17',
                            }}
                            onPress={() => navigation.navigate('CocukDetailScreen', { children })}
                        >
                            <Image
                                source={{ uri: children.image }}
                                style={{
                                    width: '100%', height: 185
                                }}
                                resizeMode="cover"
                            />
                            <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', alignItems: 'center', textAlign: 'center', marginTop: 5 }}>
                                {children.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

