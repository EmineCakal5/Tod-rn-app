import React from 'react';
import { View, Text, StyleSheet,Alert,ScrollView,TouchableOpacity } from 'react-native';

function CanliTVScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginTop: -4 }}>CANLI TV</Text>
      <ScrollView
        horizontal={true}
        >
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,

            }}
            onPress={() => alert('tümü')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Tümü</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('ulusal')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Ulusal</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('haber')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Haber</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('spor ')}

          >

            <Text style={{ color: 'white', fontWeight: 'bold' }}>Spor</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('Yerli belgesel')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Belgesel</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('Çocuk')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Çocuk</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('eğlence')}

          >

            <Text style={{ color: 'white', fontWeight: 'bold' }}>Eğlence Yaşam</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('Film')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Film</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('dizi')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Dizi</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('müzik')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Müzik</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('uluslararası ')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Uluslararası</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 20,
              borderRadius: 5,
              marginRight: 10,
            }}
            onPress={() => alert('radyo')}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Radyo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default CanliTVScreen;

