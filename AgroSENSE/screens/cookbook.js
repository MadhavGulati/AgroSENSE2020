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

const CookBookPage = ({navigation}) => {
    return (
      <>
      <StatusBar></StatusBar>
      <ScrollView>
        <View style={{flex: 1, flexDirection: "column", justifyContent: "space-evenly", backgroundColor: "#dedede"}}>

          <View style={styles.cookbook}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 1 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>CILANTRO BEURRE BLANC</Text></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 2 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>BROCCOLI CHEDDAR SOUP</Text></View></TouchableOpacity>
          </View>

          
          <View style={styles.cookbook}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 3 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>FRIED CABBAGE</Text></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 4 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>STRAWBERRY BANANA FROZEN YOGURT</Text></View></TouchableOpacity>
          </View>

          <View style={styles.cookbook}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 5 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>CHOCOLATE CHIP PUMPKIN BREAD</Text></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 6 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>TOMATO SALSA</Text></View></TouchableOpacity>
          </View>

          <View style={styles.cookbook}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 7 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>BACON AND WHITE CHEDDAR RISSOTO</Text></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 8 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>CHICKEN PESTO BAKE</Text></View></TouchableOpacity>
          </View>

          <View style={styles.cookbook}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 9 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>KALE SMOOTHIE</Text></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 10 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>GARLIC CHILE BROCCOLI</Text></View></TouchableOpacity>
          </View>

          <View style={styles.cookbook}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 11 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>SAUTEED GARDEN FRESH GREEN BEANS</Text></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 12 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>KALE</Text></View></TouchableOpacity>
          </View>

          <View style={styles.cookbook}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 13 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>RATATOUILLE</Text></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 14 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>RED LEAF SALAD</Text></View></TouchableOpacity>
          </View>

          <View style={styles.cookbook}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 15 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>FRIED GREEN CABBAGE</Text></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 16 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>CAPRESE SALAD</Text></View></TouchableOpacity>
          </View>

          <View style={styles.cookbook}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 17 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>LEAF LETTUCE SALAD</Text></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 18 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>BASIL PEACH LEMONADE</Text></View></TouchableOpacity>
          </View>

          <View style={styles.cookbook}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 19 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>BROCCOLI AND CHEDDAR CASSEROLE</Text></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 20 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>CEVICHE</Text></View></TouchableOpacity>
          </View>

          <View style={styles.cookbook}>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 21 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>CUCUMBER SALAD</Text></View></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center"}} onPress={() => navigation.navigate('Recipe', { recipeNum: 22 })}><View style={styles.smallBubbles}><Text style={{textAlign: "center", fontWeight: "bold"}}>STRAWBERRY LEMON VINAIGRETTE SALAD</Text></View></TouchableOpacity>
          </View>

        </View>

        </ScrollView>
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
      textAlign: "center",
      backgroundColor: "#60C7B9",
      borderRadius: 1000,
      width: 150,
      height: 150,
      borderWidth: 7,
      borderColor: "white",
    },
    cookbook: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      padding: 20
    }
  });

export default CookBookPage;