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

import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

const ResourceGuide = ({navigation}) => {
    return(
        <>
          <ScrollView style={{backgroundColor: "#BCE4DE", width: '100%', height: '100%'}}>
          <SafeAreaView>
            <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 40, paddingBottom: 30}}>RESOURCES</Text>
            <Text style={styles.text}>2 x 2 x 1 ½ Wye connector - </Text><Text style={styles.link} onPress={() => Linking.openURL('https://www.homedepot.com/p/2-in-x-2-in-x-1-1-2-in-PVC-DWV-H-x-H-x-H-Wye-C4810HD22112/100677988?MERCH=REC-_-pipinstock-_-100678018-_-100677988-_-N')}>https://www.homedepot.com/p/2-in-x-2-in-x-1-1-2-in-PVC-DWV-H-x-H-x-H-Wye-C4810HD22112/100677988?MERCH=REC-_-pipinstock-_-100678018-_-100677988-_-N</Text>
            <Text style={styles.text}>2 inch x 5 ft pvc pipe (2 pack) - </Text><Text style={styles.link} onPress={() => Linking.openURL('https://www.homedepot.com/p/Formufit-2-in-x-5-ft-Furniture-Grade-Schedule-40-PVC-Pipe-in-White-2-Pack-P002FGP-WH-5x2/312192344')}>https://www.homedepot.com/p/Formufit-2-in-x-5-ft-Furniture-Grade-Schedule-40-PVC-Pipe-in-White-2-Pack-P002FGP-WH-5x2/312192344</Text>
            <Text style={styles.text}>½ inch x 5 ft pvc pipe (2 pack) - </Text><Text style={styles.link} onPress={() => Linking.openURL('https://www.homedepot.com/p/FORMUFIT-1-2-in-x-5-ft-Furniture-Grade-Schedule-40-PVC-Pipe-in-White-2-Pack-P012FGP-WH-5x2/312192349')}>https://www.homedepot.com/p/FORMUFIT-1-2-in-x-5-ft-Furniture-Grade-Schedule-40-PVC-Pipe-in-White-2-Pack-P012FGP-WH-5x2/312192349</Text>
            <Text style={styles.text}>¾ inch 90 degree elbow - </Text><Text style={styles.link} onPress={() => Linking.openURL('https://www.homedepot.com/p/Charlotte-Pipe-3-4-in-PVC-Sch-40-90-S-x-S-Elbow-PVC023000800HD/203812123')}>https://www.homedepot.com/p/Charlotte-Pipe-3-4-in-PVC-Sch-40-90-S-x-S-Elbow-PVC023000800HD/203812123</Text>
            <Text style={styles.text}>¾ inch (inner) 1 inch (outer) 10 fr. vinyl - </Text><Text style={styles.link} onPress={() => Linking.openURL('https://www.homedepot.com/p/ProLine-1-in-O-D-x-3-4-in-I-D-x-10-ft-Clear-Vinyl-Tubing-CP001034010C/312502046')}>https://www.homedepot.com/p/ProLine-1-in-O-D-x-3-4-in-I-D-x-10-ft-Clear-Vinyl-Tubing-CP001034010C/312502046</Text>
            <Text style={styles.text}>1 inch (inner) 1 ¼ (outer) 50 ft. flexible tube - </Text><Text style={styles.link} onPress={() => Linking.openURL('https://www.homedepot.com/p/HYDROMAXX-1-in-I-D-x-1-1-4-in-O-D-x-50-ft-Black-Flexible-Non-Toxic-BPA-Free-Vinyl-Tubing-1402100050/310788828')}>https://www.homedepot.com/p/HYDROMAXX-1-in-I-D-x-1-1-4-in-O-D-x-50-ft-Black-Flexible-Non-Toxic-BPA-Free-Vinyl-Tubing-1402100050/310788828</Text>
            <Text style={styles.text}>LED Grow Lights - </Text><Text style={styles.link} onPress={() => Linking.openURL('https://www.amazon.com/Barrina-Equivalent-Spectrum-Reflector-Linkable/dp/B07QWV1THV')}>https://www.amazon.com/Barrina-Equivalent-Spectrum-Reflector-Linkable/dp/B07QWV1THV</Text>
            <Text style={styles.text}>Shower Curtains (2 needed) - </Text><Text style={styles.link} onPress={() => Linking.openURL('https://www.amazon.com/ZEMAHOME-Plastic-Shower-Curtain-Liner/dp/B086QFVFFD')}>https://www.amazon.com/ZEMAHOME-Plastic-Shower-Curtain-Liner/dp/B086QFVFFD</Text>
            <Text style={styles.text}>Plant Grow Tray - </Text><Text style={styles.link} onPress={() => Linking.openURL('https://www.greenhousemegastore.com/containers-trays/trays-flats/waterbed-plant-irrigation-tray')}>https://www.greenhousemegastore.com/containers-trays/trays-flats/waterbed-plant-irrigation-tray</Text>
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
  },
  link: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline"
  }
})

export default ResourceGuide;