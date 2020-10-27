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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const CommunityGuide = ({navigation}) => {
    return (
      <>
      <View style={{flex: 1, backgroundColor: "#dedede"}}>
          <View style={{alignContent: "center", justifyContent: "center", flex: 1}}>
            <TouchableOpacity onPress={() => navigation.navigate('Hydroponics')}><View style={styles.smallBubbles}><Icon name="leaf-outline" size={100} color="white" style={{alignSelf: "center", justifyContent: "center"}}></Icon></View></TouchableOpacity>
            <Text style={{fontSize: 20, textAlign: "center", fontWeight: "bold"}}>INTRO TO HYDROPONICS</Text>
          </View>
          <View style={{alignContent: "center", justifyContent: "center", flex: 1}}>
          <TouchableOpacity onPress={() => navigation.navigate('Maintenance')}><View style={styles.smallBubbles}><Icon name="hammer-outline" size={100} color="white" style={{alignSelf: "center", justifyContent: "center"}}></Icon></View></TouchableOpacity>
          <Text style={{fontSize: 20, textAlign: "center", fontWeight: "bold"}}>MAINTENANCE</Text>
          </View>
      </View>
      </>
    );
  };

  
  const styles = StyleSheet.create({
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    smallBubbles: {
      backgroundColor: '#60C7B9',
      alignSelf: "center",
      width: 200,
      height: 200,
      borderRadius: 1000,
      borderColor: "white",
      borderWidth: 7,
      alignItems: "center",
      justifyContent: "center"
    }
  });

export default CommunityGuide;