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

const MaintenanceGuide = ({navigation}) => {
    return(
        <>
          <ScrollView style={{backgroundColor: "#BCE4DE", width: '100%', height: '100%'}}>
          <SafeAreaView>
            <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 40}}>FAQ's</Text>
            <Text style={styles.question}>How do you safely replant seedlings into plugs and move it into the tubes?</Text><Text style={styles.answer}>To replant seedlings, place the plugs in the tubes, making sure not to break leaves/roots. Do not pull plants of seedlings to take out of the tube; rather, poke the hole in the bottom of the plug and push out the capsule if needed.</Text>
            <Text style={styles.question}>What is the optimal temperature and pH of water?</Text><Text style={styles.answer}>The optimal pH is slightly acidic between 6.5-7. However, check online to make sure the plants and fish you select are optimal in these pH ranges. Plants prefer slightly acidic water for efficient nutrient uptake. The temperature of the water should remain approximately 72-74 ºF. High humidity within the system’s environment is preferred, but excess humidity can lead to mold growth on the tubes. Use a dehumidifier if necessary.</Text>
            <Text style={styles.question}>How do you dry algae for fish food?</Text><Text style={styles.answer}>Algae will accumulate on the hydroponics pipe. When you clean the system, collect wastewater and pass it through an old sieve in order to trap algae. Take the filtered algae and let it sit in sunshine until dry. Crumble the dry algae and feed it to your fish once a day. Please note that this should not replace fish food - rather, it should act as a vitamin supplement.</Text>
            <Text style={styles.question}>How do you pollinate your plants?</Text><Text style={styles.answer}>Collect pollen from the male flower using a Q-tip and spread the pollen gently to the female flowers’ stigma. Do not use the same Q-tip for different species of flowers.</Text>
            <Text style={styles.question}>When can you harvest?</Text><Text style={styles.answer}>Hydroponically grown produce grows faster than regular agriculture. For leafy green, wait until leaves are 4-10 inches long. Cut the leaf at the base of the plant. This typically occurs one month after seedlings are planted. For herbs, wait until they are at full size. This typically occurs one to two months after seedlings are planted. Flowering plants are too large to fully mature in the hydroponics system. Once the plant begins flowering, carefully remove the plug from the system and plant it in a garden.</Text>
            <Text style={styles.question}>What are the easiest plants to grow within an aquaponics system?</Text><Text style={styles.answer}>Lettuce, kale, cilantro, and basil are great plants to begin using in an aquaponics system.</Text>
            <Text style={styles.question}>What pump size should I purchase for my aquaponics system?</Text><Text style={styles.answer}>The pump size depends on the amount of tubes you have along with the height of the system. Check with your aquaponic system provider before purchasing a pump.</Text>
            <Text style={styles.question}>How do I maintain good water quality within my system?</Text><Text style={styles.answer}>To maintain water quality, add water to the system every day and check the water quality with strips daily.</Text><Text style={styles.answer}>Let the water sit for a day to allow the chlorine to evaporate before returning it to the system.</Text><Text style={styles.answer}>The preferred fertilizer is called Maxigrow, and it determines how much nutrients are in the system.</Text>
            <Text style={styles.question}>How do you clean the pipes? How often?</Text><Text style={styles.answer}>Pull every plant out of the system carefully and stack on a tray with water to keep roots wet. Take the system’s pipes out and wash by hand in a bucket. Additionally, wash the roots of your plants under gentle tap water for 20 minutes. If roots are too thick, it will clog the system.</Text><Text style={styles.answer}>Put the system on a waterproof tarp and monitor it every day to make sure the pump doesn't go dry or start leaking.</Text>
            <Text style={styles.question}>What is the maintenance procedure?</Text><Text style={styles.answer}>Check water level and add water to the water bucket. Visually check the system to ensure there is no leakage. Check the health of plants, and see what needs to be harvested. Check to see if the seedling bed is soaked with water and then cover it with a plastic lid. Once a week, empty the system, turn off the pump and let the water drain out. Add 5 gallons of nutrient water to the water bucket. Scrape extra algae and hook the entire system back together. While you are doing this, scrape algae off the leaves and do the drying procedure listed above to give to fish. Once a month, take every plant out and clean the pipes. Take away algae because it encourages negative microbial growth. Once a month clean the pipes with bleach or hydrogen peroxide. Make sure to rinse the pipes well before connecting it back together.</Text>
            <Text style={styles.question}>What lights should I use?</Text><Text style={styles.answer}>You don’t need natural light. Seedling lights are on for 24 hours and hydroponic lights are on for 18 hours.</Text>
            <Text style={styles.question}>Is the seedling tray open on the bottom?</Text><Text style={styles.answer}>Yes - this is where the water is taken. This is the same water that is circulating through the system.</Text>
            <Text style={styles.question}>Is there a difference between organic and inorganic fertilizer?</Text><Text style={styles.answer}>Any fertilizer that isn’t feces is inorganic - the type of fertilizer used does not make a big difference on the plant growth. </Text>
            <Text style={styles.question}>How often do you need to replace the lights?</Text><Text style={styles.answer}>Every 5-10 years, depending on how good you maintained them. </Text>
            <Text style={styles.question}>Do we need anything to support flowering plants once they start to grow?</Text><Text style={styles.answer}>Use a string to help support the plants.</Text>
            <View style={{height: 100}}></View>
          </SafeAreaView>
          </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
  question: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  answer: {
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
})

export default MaintenanceGuide;