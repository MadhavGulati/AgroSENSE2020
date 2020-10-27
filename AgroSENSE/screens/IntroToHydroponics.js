import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import YouTube from 'react-native-youtube';
import { YouTubeStandaloneIOS } from 'react-native-youtube';

import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const HydroponicsGuide = ({navigation}) => {
    return(
        <>
          <YouTube
  videoId="tzBK4QZSQaY" // The YouTube video ID
  play // control playback of video with true/false
  inline // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  style={{ alignSelf: 'stretch', height: 300 }}
/>
      <ScrollView style={{backgroundColor: "#BCE4DE"}}>
        <Text style={styles.paragraph}>Hydroponics is a system of growing produce that omits the use of soil in favor of nutrient solutions dissolved within an aqueous solvent such as water. By having a fixed concentration of nutrients within the water, hydroponics ensures that plants spend less energy searching for minerals with their roots, allowing them to expend more energy on growing. This results in larger produce grown at a faster rate than traditional agriculture. 
        </Text>
        <Text style={styles.bullets}>There are numerous advantages in using hydroponically grown produce:</Text>
        <Text style={styles.bullets}>•Complete control over nutrient balance</Text>
        <Text style={styles.bullets}>•Hydroponics utilizes up to ⅔ less water than traditional agriculture, despite being water-based.</Text>
        <Text style={styles.bullets}>•Climate can be controlled, meaning that produce can be grown year-round.</Text>
        <Text style={styles.bullets}>•Produce can be grown indoors and in places with limited fertile land</Text>
        <Text style={styles.bullets}>•Produce can be grown vertically in order to maximize yield and save ground space</Text>
        <Text style={styles.bullets}>•Hydroponically grown produce are more nutrient dense</Text>
        <Text style={styles.bullets}>•Pesticide use is limited because most pesticides are used in soils</Text>
        <Text style={{fontSize: 15, fontWeight: "bold", padding: 30, color: "blue", textDecorationLine: "underline"}} onPress={() => Linking.openURL('http://urbangardencenter.net/index.php?route=information/information&information_id=38')}>http://urbangardencenter.net/index.php?route=information/information&information_id=38</Text>
</ScrollView>
        </>
    )
}
   
const styles = StyleSheet.create({
  paragraph: {
    padding: 40,
    fontSize: 20,
    fontWeight: "bold"
  },
  bullets: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 15,
  }
})
  
  
export default HydroponicsGuide;