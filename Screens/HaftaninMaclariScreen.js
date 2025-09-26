import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

export default function HaftaninMaclariScreen({ navigation }) {

  return (

    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -39,

      }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('FormulaScreen')}>
          <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>Trendyol Süper Lig</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('FormulaScreen')}
          style={{ marginTop: 70, borderWidth: 1, backgroundColor: '#1f1d17', borderRadius: 17, padding: 4 }} >
          <ChevronRight
            size={22}
            color="gray"
            fontWeight='bold'
          />
        </TouchableOpacity>
      </View>

      {/*1.Poster*/}

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false} >

        {[
          'https://mediacms01.digiturkplay.com/sa_bc/PZ0000008176/trendyol-superlig-derbiler2024-25_220x286.jpg',
          'https://mediacms01.digiturkplay.com/sa_bc/PZ0000008142/haftanin-golleri-trendyol-2024-25_220x286.jpg',
          'https://mediacms01.digiturkplay.com/sa_bc/PZ0000008145/haftanin-ozetleri-trendyol-2024-25_220x286.jpg',
          'https://mediacms01.digiturkplay.com/sa_bc/PZ0000008140/superlig-sezonun-ozetleri-2024-25_220x286.jpg',
          'https://mediacms01.digiturkplay.com/sa_bc/PZ0000008105/90dakika-maclar-2024-25_220x286.jpg',
        ].map((url, index) => (
          <View

            style={{
              width: 150,
              height: 220,
              marginRight: 10,
              borderWidth: 4,
              borderRadius: 15,
              backgroundColor: '#1f1d17'
            }}
          >
            <Image
              source={{ uri: url }}
              style={{ width: '100%', height: 185 }}
              resizeMode='cover'
            />
            <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', textAlign: 'center', marginTop: 5, alignItems: 'center' }}>
              Trendyol Süper Lig...
            </Text>
          </View>
        ))}
      </ScrollView>



      {/*2.Poster*/}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -39,

      }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('FormulaScreen')}>
          <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 70, fontSize: 16 }}>İngiltere Premier Lig</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('FormulaScreen')}
          style={{ marginTop: 70, borderWidth: 1, backgroundColor: '#1f1d17', borderRadius: 17, padding: 4 }} >
          <ChevronRight
            size={22}
            color="gray"
            fontWeight='bold'
          />
        </TouchableOpacity>
      </View>

      {/*1.Poster*/}

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false} >

        {[
          'https://mediacms01.digiturkplay.com/sa_bc/PZ0000008176/trendyol-superlig-derbiler2024-25_220x286.jpg',
          'https://mediacms01.digiturkplay.com/sa_bc/PZ0000008142/haftanin-golleri-trendyol-2024-25_220x286.jpg',
          'https://mediacms01.digiturkplay.com/sa_bc/PZ0000008145/haftanin-ozetleri-trendyol-2024-25_220x286.jpg',
          'https://mediacms01.digiturkplay.com/sa_bc/PZ0000008140/superlig-sezonun-ozetleri-2024-25_220x286.jpg',
          'https://mediacms01.digiturkplay.com/sa_bc/PZ0000008105/90dakika-maclar-2024-25_220x286.jpg',
        ].map((url, index) => (
          <View

            style={{
              width: 150,
              height: 220,
              marginRight: 10,
              borderWidth: 4,
              borderRadius: 15,
              backgroundColor: '#1f1d17'
            }}
          >
            <Image
              source={{ uri: url }}
              style={{ width: '100%', height: 185 }}
              resizeMode='cover'
            />
            <Text style={{ color: 'white', fontSize: 12, alignItems: 'center', textAlign: 'center', marginTop: 5, alignItems: 'center' }}>
              Trendyol Süper Lig...
            </Text>
          </View>
        ))}
      </ScrollView>

    </ScrollView>


  )
}