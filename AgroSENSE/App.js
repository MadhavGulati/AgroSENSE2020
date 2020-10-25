/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from "./screens/home.js";
import CommunityGuide from "./screens/community.js";
import MapPage from "./screens/map.js";
import CookBookPage from "./screens/cookbook.js";
import RecipePage from "./screens/recipe.js";
import HydroponicsGuide from "./screens/IntroToHydroponics.js";
import MaintenanceGuide from "./screens/maintenance.js";
import BuildersGuide from "./screens/builder.js";
import InstructionsGuide from "./screens/instructions.js";
import ResourcesGuide from "./screens/resources.js";
import SystemInfo from "./screens/info.js";
import Survey from "./screens/survey.js";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Community" component={CommunityGuide} />
        <Stack.Screen name="Map" component={MapPage} />
        <Stack.Screen name="Cookbook" component={CookBookPage} />
        <Stack.Screen name="Recipe" component={RecipePage} />
        <Stack.Screen name="Hydroponics" component={HydroponicsGuide} />
        <Stack.Screen name="Maintenance" component={MaintenanceGuide} />
        <Stack.Screen name="Build" component={BuildersGuide} />
        <Stack.Screen name="Instructions" component={InstructionsGuide} />
        <Stack.Screen name="Resources" component={ResourcesGuide} />
        <Stack.Screen name="SystemInfo" component={SystemInfo} />
        <Stack.Screen name="Survey" component={Survey} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
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
  }
});

export default MyStack;
