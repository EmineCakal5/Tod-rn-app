import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

function SearchScreen({navigation}) {
     const [text, setText] = useState([]);
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor:'black' }}>
      <Text >Search Screen</Text>
            <TextInput
        style={{
          width: '100%',
          height: 50,
          borderBottomColor: 'gray',
          paddingHorizontal: 8,
          marginTop: 8,
          textAlign:'left',
          fontSize: 20,
        }}
        placeholder="Film, Dizi adında ara "
        placeholderTextColor="gray"
        value={text}
        
        ></TextInput>
    </View>
  );
}

export default SearchScreen;