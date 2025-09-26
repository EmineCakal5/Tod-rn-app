
import { Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';



export default function CocukDetailScreen({route, navigation}) {
    const {children} = route.params;

    return (
        <ScrollView style={{backgroundColor: 'black'}} >
            <View style={{ padding:10, alignItems: 'center ', position:'relative'}}>
                <Image
                source={{uri: children.image}}
                style={{width:410, height:350}}
                resizeMode='stretch'
                />
                <View >
                    <Text style={{fontSize: 22, marginTop:12, textAlign:'left', color: 'white', fontWeight: 'bold', position: 'absolute', backgroundColor: 'transparent', zIndex: 90}}>{children.title}</Text>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:30}}>
                    <Image 
                    source={require('../Assets/movieIcon.png')}
                    style={{width: 29, height: 25, marginLeft: 0, marginTop:30}}/>
                    <Text style={{color:'white', fontWeight:'bold', marginTop:30}}>{children.year}</Text>
                    <Image source={require('../Assets/MovieRoll.png')} style={{ width: 35, height: 36, marginLeft: 7, marginTop:30 }} />
                    <Text style={{ color: 'white', marginTop:30, marginLeft:-11, fontWeight:'bold'}}>   {children.genre[0]}</Text>
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
                                        onPress={() => navigation.navigate('Video3PlayerScreen')}
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
                </View>
            </View>
        </ScrollView>
    )
}