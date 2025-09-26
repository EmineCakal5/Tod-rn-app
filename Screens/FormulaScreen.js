import { View, ScrollView, Image, Text } from 'react-native';

const Categories = [
  'Özetler',
  'Yarışlar',
  'Antrenman Seansı',
  'Sıralama Turları',
  'Finish Line'
];

export default function FormulaScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >
          {[
            'https://mediacms01.digiturkplay.com/sa_bc/PZ0000007969/formula1-ozetler-25-son_220x286.jpg',
            'https://mediacms01.digiturkplay.com/sa_bc/PZ0000007967/formula1-yarislar-25-son_220x286.jpg',
            'https://mediacms01.digiturkplay.com/sa_bc/PZ0000007984/formula1-antrenman-seansi-25-son_220x286.jpg',
            'https://mediacms01.digiturkplay.com/sa_bc/PZ0000007968/formula1-siralama-turlari-25-son_220x286.jpg',
            'https://mediacms01.digiturkplay.com/sa_bc/PZ0000007972/finish-line-2024_220x286.jpg',
          ].map((url, index) => (
            <View
              key={index}
              style={{
                width: 140,
                height: 220,
                marginLeft: 42,
                marginBottom: 14,
                borderRadius: 10,
                backgroundColor: '#1f1d17'
              }}
            >
              <Image
                source={{ uri: url }}
                style={{ width: '100%', height: 185 }}
                resizeMode='cover'
              />
              <Text style={{ color: 'white', fontSize: 12, textAlign: 'center', marginTop: 5 }}>
                Formula 1 {Categories[index]}
              </Text>
            </View>

          ))}
        </View>
      </ScrollView>
    </View>
  );
}