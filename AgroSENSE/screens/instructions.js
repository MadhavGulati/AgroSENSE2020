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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const InstructionsGuide = ({navigation}) => {
    return(
        <>
          <ScrollView style={{backgroundColor: "#BCE4DE", width: '100%', height: '100%'}}>
          <SafeAreaView>
            <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 40, paddingBottom: 30}}>ASSEMBLY</Text>
            <Text style={styles.text}>1) Start off by laying a tarp on the area of placement to ensure that if any spills occur, the ground below or around the system will not be damaged.</Text>
            <Text style={styles.text}>2) Then assemble the T- slot metal frames. The 76 inch metal frames will provide the structural integrity for the four sides of the system.  The 3ft and 46 inch metal frames will provide extra support for the whole frame. From here, place the black, plastic tray on the lower metal frame.</Text>
            <Text style={styles.text}>3) Below the plastic tray, place the 15 gallon bucket. In the bucket, attach the U.V. light.</Text>
            <Text style={styles.text}>4) Initiate the application of the T-pipe at the top of the system and attach the vertical pipes to the T-connectors on the T-pipe.</Text>
            <Text style={styles.text}>5) Put the seedlings into the directed holes and run the system.</Text>
            <Text style={styles.text}>6) Hang the shower curtains on the metal frame to surround the system to prevent water leakage. The shower curtains should be trimmed to the length appropriate to tuck into the black collection tray.</Text>
            <View style={{height: 100}}></View>
          </SafeAreaView>
          </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 16
  }
})

export default InstructionsGuide;