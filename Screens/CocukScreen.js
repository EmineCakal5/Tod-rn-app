import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {ChevronRight} from 'lucide-react-native';

export default function CocukScreen({ navigation }) {
  console.log('ekmek');

  const [childrens, setChildrens] = useState([]);

  useEffect(() => {
    const fetchChildrens = async () => {
      try {
        const res = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');

        const data = await res.json();
        setChildrens(data);
        console.log('data', data);
      }
      catch (error) {
        console.error(error);
      }
    };
    fetchChildrens();
  }, []);

  return (

    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={{ alignItems: 'center', position: 'relative' }}>
        <Text style={{ fontSize: 22, marginVertical: 10, color: 'white', fontWeight: 'bold', position: 'absolute', backgroundColor: 'transparent', zIndex: 10 }}>ÇOCUK</Text>
    
        <View style={{ flex: 2 }}>
         <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={400}
        >
          {childrens.slice(1,14).map((children) => (
  <View key={children.id} style={{ alignItems: "center"}}>
    <TouchableOpacity onPress={() => navigation.navigate('CocukDetailScreen', {children})}> 
      <Image
        source={{ uri: children.image }}
        style={{ width:400, height: 350}}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  </View>
          ))}
        </ScrollView>
      </View>
      </View>
          
          <View  style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:-31
           
          }}>
            <TouchableOpacity
            onPress={() => alert("kid")}
            >
              <Text style={{color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16}}> Çocuk Sineması</Text>
            </TouchableOpacity>
          <TouchableOpacity
                onPress={() => alert('g')}
                style={{ marginTop: 70, borderWidth: 1, backgroundColor: '#1f1d17', borderRadius: 17, padding: 4, marginLeft:213 }} >
                <ChevronRight
                  size={22}
                  color="gray"
                  fontWeight='bold'
                />
              </TouchableOpacity>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal= {true}
            >
           {childrens.slice(2,8).map((children) => (
            <View key={children.id} style={{alignItems:'center'}}>
            <TouchableOpacity
                                style={{
                                  width: 150,
                                  height: 225,
                                  marginRight: 10,
                                  borderWidth: 4,
                                  borderRadius: 15,
                                  backgroundColor: '#1f1d17'
                                }}
                onPress={() => navigation.navigate('CocukDetailScreen', {children})}
                >
                  <Image
                  source={{uri: children.image}}
                  style={{width:'100%', height:185}}
                  resizeMode='stretch'
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 12,
                      marginTop: 5,
                      marginBottom: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}> {children.title}
                  </Text>
                  
                </TouchableOpacity>
            </View>
            
           ))}

          </ScrollView>
      </View>
    </ScrollView>
  );
}