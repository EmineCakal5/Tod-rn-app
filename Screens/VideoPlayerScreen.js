import {View, Text} from 'react-native';
import Video from 'react-native-video';

export default function VideoPlayerScreen({navigation}) {
    return (

        <View style={{flex:1, backgroundColor:'black', justifyContent:'center'}} >
            <Video
            source={require("../Assets/video2.mp4")}
            style={{width:'100%', height:300}}
            controls={true}
            />
        </View>
    )
}