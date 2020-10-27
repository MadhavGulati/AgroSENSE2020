import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Navigation
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



class Survey extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      qNum: 'q1',
      points: 0,
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.endSurvey = this.endSurvey.bind(this);
  }


  nextQuestion(nextqnum, ansPoints) {
    this.setState({
      qNum: nextqnum,
      points: this.state.points + ansPoints
    })
  }

  endSurvey(ansPoints) {
    this.setState({
      points: this.state.points + ansPoints,
      qNum: "endSurvey",
    })
    global.surveyPoints = this.state.points;
  }

  render() {
    if (this.state.qNum === "q1") {
      return (
        <>
        <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
        <SafeAreaView>
          <Text style={styles.question}>How much space is available?</Text>
          <Text style={styles.answer} onPress={() => this.endSurvey(1)}>Small room (4’ x 6’ x 7’)</Text>
          <Text style={styles.answer} onPress={() => this.nextQuestion("q2", 2)}>Larger room (6’ x 6’ x 7’)</Text>
          <Text style={styles.answer} onPress={() => this.nextQuestion("q2", 3)}>Open area</Text>
        </SafeAreaView>
        </View>
        </>
      )}
  else if (this.state.qNum === "q2") {
    return (
      <>
      <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
      <SafeAreaView>
        <Text style={styles.question}>How often would the system be harvested?</Text>
        <Text style={styles.answer} onPress={() => this.nextQuestion("q3", 1)}>1-2 days a week</Text>
        <Text style={styles.answer} onPress={() => this.nextQuestion("q3", 2)}>3-5 days a week</Text>
        <Text style={styles.answer} onPress={() => this.nextQuestion("q3", 3)}>Everyday</Text>
      </SafeAreaView>
      </View>
      </>
    )}
    else if (this.state.qNum === "q3") {
      return (
        <>
        <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
        <SafeAreaView>
          <Text style={styles.question}>Who is the system intended for?</Text>
          <Text style={styles.answer} onPress={() => this.nextQuestion("qL4", 0)}>Educational Facility</Text>
          <Text style={styles.answer} onPress={() => this.nextQuestion("qR4", 0)}>Personal Community</Text>
        </SafeAreaView>
        </View>
        </>
      )}
    else if (this.state.qNum === "qL4") {
      return (
        <>
        <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
        <SafeAreaView>
          <Text style={styles.question}>Who is the intended audience?</Text>
          <Text style={styles.answer} onPress={() => this.nextQuestion("qL5", 0)}>Elementary School students</Text>
          <Text style={styles.answer} onPress={() => this.nextQuestion("qL5", 0)}>Middle School students</Text>
          <Text style={styles.answer} onPress={() => this.nextQuestion("qL5", 0)}>High School students</Text>
        </SafeAreaView>
        </View>
        </>
      )}
    else if (this.state.qNum === "qL5") {
      return (
        <>
        <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
        <SafeAreaView>
          <Text style={styles.question}>Who is the intended audience?</Text>
          <Text style={styles.answer} onPress={() => this.nextQuestion("qL6", 0)}>Elementary School students</Text>
          <Text style={styles.answer} onPress={() => this.nextQuestion("qL6", 0)}>Middle School students</Text>
          <Text style={styles.answer} onPress={() => this.nextQuestion("qL6", 0)}>High School students</Text>
        </SafeAreaView>
        </View>
        </>
      )}
    else if (this.state.qNum === "qL6") {
            return (
              <>
              <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
              <SafeAreaView>
                <Text style={styles.question}>Purpose of Harvesting?</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qL7", 0)}>Consumption</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qL8", 0)}>Solely Educational</Text>
              </SafeAreaView>
              </View>
              </>
            )}
        else if (this.state.qNum === "qL7") {
            return (
              <>
              <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
              <SafeAreaView>
                <Text style={styles.question}>How many people should this system feed?</Text>
                <Text style={styles.answer} onPress={() => this.endSurvey(1)}>1-4</Text>
                <Text style={styles.answer} onPress={() => this.endSurvey(2)}>5-10</Text>
                <Text style={styles.answer} onPress={() => this.endSurvey(3)}>10+</Text>
              </SafeAreaView>
              </View>
              </>
            )}
          else if (this.state.qNum === "qL8") {
            return (
              <>
              <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
              <SafeAreaView>
                <Text style={styles.question}>How many people would need to access the system simultaneously?</Text>
              <Text style={styles.answer} onPress={() => this.endSurvey(1)}>1-4</Text>
              <Text style={styles.answer} onPress={() => this.endSurvey(2)}>3-10</Text>
              <Text style={styles.answer} onPress={() => this.endSurvey(3)}>10+</Text>
              </SafeAreaView>
              </View>
              </>
            )}
          else if (this.state.qNum === "qR4") {
            return (
              <>
              <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
              <SafeAreaView>
                <Text style={styles.question}>Purpose of Harvesting?</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qR5", 0)}>Consumption</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qR6", 0)}>Solely Educational</Text>
              </SafeAreaView>
              </View>
              </>
            )}
          else if (this.state.qNum === "qR5") {
            return (
              <>
              <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
              <SafeAreaView>
                <Text style={styles.question}>How many people should this system feed?</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qR7", 1)}>1-4</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qR7", 2)}>5-10</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qR7", 3)}>10+</Text>
              </SafeAreaView>
              </View>
              </>
            )}
          else if (this.state.qNum === "qR6") {
            return (
              <>
              <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
              <SafeAreaView>
                <Text style={styles.question}>How many people would need to access the system simultaneously?</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qR7", 1)}>1-2</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qR7", 2)}>3-10</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qR7", 3)}>10+</Text>
              </SafeAreaView>
              </View>
              </>
            )}
          else if (this.state.qNum === "qR7") {
            return (
              <>
              <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
              <SafeAreaView>
                <Text style={styles.question}>Who is the system intended for?</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qR8", 0)}>Personal/Home</Text>
                <Text style={styles.answer} onPress={() => this.nextQuestion("qR9", 0)}>Community</Text>
              </SafeAreaView>
              </View>
              </>
            )}
          else if (this.state.qNum === "qR8") {
            return (
              <>
              <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
              <SafeAreaView>
                <Text style={styles.question}>Any children or pets that would be in close proximity to the system?</Text>
                <Text style={styles.answer} onPress={() => this.endSurvey(0)}>Yes</Text>
                <Text style={styles.answer} onPress={() => this.endSurvey(0)}>No</Text>
              </SafeAreaView>
              </View>
              </>
            )}
          else if (this.state.qNum === "qR9") {
            return (
              <>
              <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
              <SafeAreaView>
                <Text style={styles.question}>Where will the system be located?</Text>
                <Text style={styles.answer} onPress={() => this.endSurvey(0)}>Indoors</Text>
                <Text style={styles.answer} onPress={() => this.endSurvey(0)}>Outdoors</Text>
              </SafeAreaView>
              </View>
              </>
            )}







      else if (this.state.qNum === "endSurvey") {
          return (
            <>
            <View style={{backgroundColor: '#60C7B9', height: '100%', width: '100%'}}>
            <SafeAreaView>
              <Text style={{fontSize: 40, fontWeight: "bold", padding: 20, textAlign: "center"}}>SURVEY COMPLETE</Text>
              <Text style={{fontWeight: "bold", fontSize: 20, padding: 30, textAlign: "center",  backgroundColor: "#dedede", marginTop: 50, width: '70%', alignSelf: "center"}} onPress= {() => this.props.navigation.navigate('SystemInfo', {points: this.state.points})}>See Results</Text>
              <Text style={{fontSize: 20, padding: 20, textAlign: "center", backgroundColor: "#dedede", marginTop: 50, width: '70%', alignSelf: "center"}} onPress= {() => this.setState({qNum: "q1", points: 0})}>Take the survey again?</Text>
              <Text style={{fontSize: 20, padding: 20, textAlign: "center", backgroundColor: "#dedede", marginTop: 50, width: '70%', alignSelf: "center"}} onPress= {() => this.props.navigation.navigate('Build')}>Go to Building instructions</Text>
              <Text style={{fontSize: 20, padding: 20, textAlign: "center", backgroundColor: "#dedede", marginTop: 50, width: '70%', alignSelf: "center"}} onPress= {() => this.props.navigation.navigate('Cookbook')}>Hydroponic-grown Recipes</Text>
            </SafeAreaView>
            </View>
            </>
          )}
  }



}




const styles = StyleSheet.create({
  question: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 20
  },
  answer: {
    fontSize: 13,
    padding: 30,
    marginTop: 40,
    width: '80%',
    marginLeft: 20,
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 40
  }
});


export default Survey;