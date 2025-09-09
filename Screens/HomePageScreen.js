import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
function HomePageScreen({navigation}) {
  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center', backgroundColor: 'black' }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        <View>
         <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
          onPress={() => navigation.navigate('FilmScreen')}
        
          >
          
          <Text style={{ color: 'white', fontWeight: 'bold' }}>FİLM</Text>
          </TouchableOpacity>
          </View>
          <View>
         <TouchableOpacity
          style={{
           backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
          onPress={() => navigation.navigate('DiziScreen')}
          >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>DİZİ</Text>
          </TouchableOpacity>
          </View>
         <View>
         <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
          onPress={() => navigation.navigate('SporScreen')}
          >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>SPOR</Text>
          </TouchableOpacity>
          </View>
       <View>
         <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
          onPress={() => navigation.navigate('CocukScreen')}
          >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>ÇOCUK</Text>
          </TouchableOpacity>
          </View>
         <View>
         <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
          onPress={() => navigation.navigate('CanliTVScreen')}
          >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>CANLI TV</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
  );
}

export default HomePageScreen;