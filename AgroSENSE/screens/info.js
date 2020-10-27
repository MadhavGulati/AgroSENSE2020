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

const SystemInfo = ({navigation}) => {
  let points = global.surveyPoints;

    if (points >= 0 && points <= 4) {
      return(
        <>
        <View style={{flex: 1, backgroundColor: "#dedede"}}>
          <View style={{alignContent: "center", justifyContent: "center", flex: 1}}>
            <TouchableOpacity onPress={() => navigation.navigate('Instructions')}><View style={styles.bubble}>
                <Text style={{fontSize: 120, textAlign: "center", fontWeight: "bold", color: "white"}}>S</Text>
            </View></TouchableOpacity>
            </View>
        <View style={{alignContent: "center", justifyContent: "center", flex: 1}}>
          <TouchableOpacity onPress={() => navigation.navigate('Build')}><View style={styles.panel}>
              <Text style={{fontSize: 25, textAlign: "center", fontWeight: "bold", color: "white"}}>SMALL SYSTEM</Text>
          </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Build')}><View style={styles.smallPanel}>
                <Text style={{fontSize: 15, textAlign: "center", fontWeight: "bold", color: "white"}}>BUILDING INSTRUCTIONS</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Hydroponics')}><View style={styles.smallPanel}>
                <Text style={{fontSize: 15, textAlign: "center", fontWeight: "bold", color: "white"}}>ABOUT HYDROPONICS</Text>
            </View>
          </TouchableOpacity></View>
        </View>
        </>
    )}
    else if (points >= 5 && points <= 8) {
    return(
        <>
        <View style={{flex: 1, backgroundColor: "#dedede"}}>
          <View style={{alignContent: "center", justifyContent: "center", flex: 1}}>
            <TouchableOpacity onPress={() => navigation.navigate('Instructions')}><View style={styles.bubble}>
                <Text style={{fontSize: 120, textAlign: "center", fontWeight: "bold", color: "white"}}>M</Text>
            </View></TouchableOpacity>
            </View>
        <View style={{alignContent: "center", justifyContent: "center", flex: 1}}>
          <TouchableOpacity onPress={() => navigation.navigate('Build')}><View style={styles.panel}>
              <Text style={{fontSize: 25, textAlign: "center", fontWeight: "bold", color: "white"}}>MEDIUM SYSTEM</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Build')}><View style={styles.smallPanel}>
                <Text style={{fontSize: 15, textAlign: "center", fontWeight: "bold", color: "white"}}>BUILDING INSTRUCTIONS</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Hydroponics')}><View style={styles.smallPanel}>
                <Text style={{fontSize: 15, textAlign: "center", fontWeight: "bold", color: "white"}}>ABOUT HYDROPONICS</Text>
            </View>
            </TouchableOpacity></View>
        </View>
        </>
    )}
    else if (points >= 9 && points <= 15) {
      return(
          <>
          <View style={{flex: 1, backgroundColor: "#dedede"}}>
            <View style={{alignContent: "center", justifyContent: "center", flex: 1}}>
              <TouchableOpacity onPress={() => navigation.navigate('Instructions')}><View style={styles.bubble}>
                  <Text style={{fontSize: 120, textAlign: "center", fontWeight: "bold", color: "white"}}>L</Text>
              </View></TouchableOpacity>
              </View>
          <View style={{alignContent: "center", justifyContent: "center", flex: 1}}>
          <TouchableOpacity onPress={() => navigation.navigate('Build')}>
            <View style={styles.panel}>
                <Text style={{fontSize: 25, textAlign: "center", fontWeight: "bold", color: "white"}}>LARGE SYSTEM</Text>
            </View></TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Build')}><View style={styles.smallPanel}>
                <Text style={{fontSize: 15, textAlign: "center", fontWeight: "bold", color: "white"}}>BUILDING INSTRUCTIONS</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Hydroponics')}><View style={styles.smallPanel}>
                <Text style={{fontSize: 15, textAlign: "center", fontWeight: "bold", color: "white"}}>ABOUT HYDROPONICS</Text>
            </View>
            </TouchableOpacity>
          </View>
          </View>
          </>
      )}
      else {
        return(
        <>
        <View style={{flex: 1, backgroundColor: "#dedede"}}>
          <View style={{alignContent: "center", justifyContent: "center", flex: 1}}>
            <TouchableOpacity onPress={() => navigation.navigate('Survey')}><View style={styles.bubble}>
                <Text style={{fontSize: 25, textAlign: "center", fontWeight: "bold", color: "white"}}>NO SYSTEM CHOSEN</Text>
            </View></TouchableOpacity>
            </View>
        <View style={{alignContent: "center", justifyContent: "center", flex: 1}}>
          <TouchableOpacity onPress={() => navigation.navigate('Survey')}><View style={styles.panel}>
              <Text style={{fontSize: 25, textAlign: "center", fontWeight: "bold", color: "white"}}>TAKE THE SURVEY</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Build')}><View style={styles.smallPanel}>
                <Text style={{fontSize: 15, textAlign: "center", fontWeight: "bold", color: "white"}}>BUILDING INSTRUCTIONS</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Hydroponics')}><View style={styles.smallPanel}>
                <Text style={{fontSize: 15, textAlign: "center", fontWeight: "bold", color: "white"}}>ABOUT HYDROPONICS</Text>
            </View>
            </TouchableOpacity></View>
        </View>
        </>
      )}
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 16
  },
  bubble: {
    backgroundColor: '#60C7B9',
    alignSelf: "center",
    width: 200,
    height: 200,
    borderRadius: 1000,
    borderColor: "white",
    borderWidth: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  panel: {
    backgroundColor: '#60C7B9',
    alignSelf: "center",
    width: '80%',
    height: 100,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  smallPanel: {
    backgroundColor: '#60C7B9',
    alignSelf: "center",
    width: '80%',
    height: 75,
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  }
})

export default SystemInfo;