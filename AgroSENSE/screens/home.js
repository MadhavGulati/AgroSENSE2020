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

const HomePage = ({navigation}) => {
    return (
      <>
      <StatusBar></StatusBar>
        <View style={{flex: 1, flexDirection: "column", justifyContent: "space-between", backgroundColor: "#dedede"}}>
          <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
          <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Build')}><View style={styles.smallBubbles}><Icon name="build-outline" size={60} color="white" style={{alignSelf: "center", justifyContent: "center"}}></Icon></View></TouchableOpacity>
          <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Community')}><View style={styles.smallBubbles}><Icon name="search-outline" size={60} color="white" style={{alignSelf: "center", justifyContent: "center"}}></Icon></View></TouchableOpacity>
          </View>
          <View style={{flex:1, alignContent: "center", justifyContent: "center"}}>
            
            <TouchableOpacity onPress={() => navigation.navigate('SystemInfo')}>
              <View style={{backgroundColor: "#60C7B9", width: 250, height: 250, alignSelf: "center", alignContent: "center", justifyContent: "center", borderRadius: 10000, borderColor: "white", borderWidth: 10}}>
              <Icon name="leaf-outline" size={120} color="white" style={{alignSelf: "center", justifyContent: "center"}}></Icon>
              </View>
            </TouchableOpacity>
            
            
            
          </View>
          <View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", alignContent: "center"}}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Cookbook')}><View style={styles.smallBubbles}><Icon name="book-outline" size={60} color="white" style={{alignSelf: "center", justifyContent: "center"}}></Icon></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Map')}><View style={styles.smallBubbles}><Icon name="map-outline" size={60} color="white" style={{alignSelf: "center", justifyContent: "center"}}></Icon></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Survey')}><View style={styles.smallBubbles}><MatIcon name="poll" size={70} color="white" style={{justifyContent: "center", alignSelf: "center"}}></MatIcon></View></TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  
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
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#60C7B9",
    borderRadius: 1000,
    width: 100,
    height: 100,
    borderWidth: 7,
    borderColor: "white"
  }
});

export default HomePage;