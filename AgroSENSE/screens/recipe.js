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
  FlatList,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const RecipePage = ({route, navigation}) => {
    const { recipeNum } = route.params;
    const windowHeight = Dimensions.get('window').height;

    {/* RECIPE NUMBER 1*/}

    if (recipeNum == 1) {
    return (
      <>
      <StatusBar style={{barStyle: "light-content"}}></StatusBar>

    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <View style={{height: '100%', width: '100%', flex: 1, color: "black"}}>
            <Image source={require('./recipeimages/cilantrobeurreblanc.png')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3} minimumFontScale={0.5}>CILANTRO BEURRE BLANC</Text>
            </View>
        </View>
        <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
        <Text style={styles.paragraph}>White wine, lemon, heavy cream, butter, cilantro, salt, pepper</Text>    
        <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
        <Text style={styles.recipeText}>1) Season chicken breast to taste, and let chicken sit in seasoning for at least 20 minutes.</Text>
        <Text style={styles.recipeText}>2) Place a pan with olive oil mid-high heat.</Text>
        <Text style={styles.recipeText}>3) Sear both sides of chicken breast for 2 minutes.</Text>
        <Text style={styles.recipeText}>4) Finish chicken in oven at 350 for 8 minutes.</Text>
        <Text style={styles.recipeText}>5) Place white wine, lemon, and heavy cream in a pot at low heat.</Text>
        <Text style={styles.recipeText}>6) Reduce.</Text>
        <Text style={styles.recipeText}>7) Add butter and cilantro</Text>
        <Text style={styles.recipeText}>8) Whisk</Text>
        </View>
    </ScrollView>
      </>
    );
    }

    if (recipeNum == 2) {
        return (
          <>
          <StatusBar style={{barStyle: "light-content"}}></StatusBar>
    
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
              <View style={{height: '100%', width: '100%', flex: 1}}>
                <Image source={require('./recipeimages/broccolicheddarsoup.png')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3} minimumFontScale={0.5}>BROCCOLI CHEDDAR SOUP</Text>
                </View>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'}}>
                </View>
            </View>
            <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>1 Tbsp + 5 Tbsp butter divided, 1 Small Yellow Onion - small dice, 1 clove Garlic - peeled and minced finely, ⅓ cup All-Purpose Flour, 2 cups Vegetable Stock, 2 cups Half-and-Half, 2-3 cups Broccoli Florets, 2 Large Carrots peeled and sliced into thin rounds, ¾ tsp Salt, or to taste, ¾ tsp Ground Black Pepper, or to taste, ½ tsp Paprika (optional), ½ tsp Dry Mustard Powder (optional), ⅛ tsp Cayenne Pepper (optional), 8 Ounces Cheddar Cheese</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
            <Text style={styles.recipeText}>1) Season chicken breast to taste, and let chicken sit in seasoning for at least 20 minutes.</Text>
            <Text style={styles.recipeText}>2) Place a pan with olive oil mid-high heat.</Text>
            <Text style={styles.recipeText}>3) Sear both sides of chicken breast for 2 minutes.</Text>
            <Text style={styles.recipeText}>4) Finish chicken in oven at 350 for 8 minutes.</Text>
            <Text style={styles.recipeText}>5) Place white wine, lemon, and heavy cream in a pot at low heat.</Text>
            <Text style={styles.recipeText}>6) Reduce.</Text>
            <Text style={styles.recipeText}>7) Add butter and cilantro</Text>
            <Text style={styles.recipeText}>8) Whisk</Text>
            </View>
        </ScrollView>
          </>
        );
    }
    if (recipeNum == 3) {
      return (
        <>
        <StatusBar style={{barStyle: "light-content"}}></StatusBar>
  
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            <View style={{height: '100%', width: '100%', flex: 1}}>
              <Image source={require('./recipeimages/friedcabbage.jpeg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3} minimumFontScale={0.5}>FRIED CABBAGE</Text>
              </View>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Text style={styles.paragraph}>Ingredients: 3 tbsp butter, ⅓ cup finely chopped onion, ½ cup shredded green cabbage, ¼ tsp smoked paprika, Salt and pepper to taste, 1 tbsp brown sugar (optional)</Text>
            </View>
          </View>
          <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
          <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
          <Text style={styles.recipeText}>1) Add butter to pan and melt.</Text>
          <Text style={styles.recipeText}>2) Add onions to pan and cook until translucent.</Text>
          <Text style={styles.recipeText}>3) Add cabbage, salt, pepper, paprika, brown sugar, and mix everything together.</Text>
          <Text style={styles.recipeText}>4) Cook for 7 minutes or until cabbage is tender.</Text>
          </View>
      </ScrollView>
        </>
      );
  }
  if (recipeNum == 4) {
    return (
      <>
      <StatusBar style={{barStyle: "light-content"}}></StatusBar>

    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <View style={{height: '100%', width: '100%', flex: 1}}>
            <Image source={require('./recipeimages/strawberrybananafrozenyogurt.png')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3} minimumFontScale={0.5}>STRAWBERRY BANANA FROZEN YOGURT</Text>
            </View>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text style={styles.paragraph}>Ingredients: 4 cups frozen strawberry, 3 tbsp honey, ½ cup non-fat yogurt, 1 tbsp fresh lemon juice, ½ banana</Text>
          </View>
        </View>
        <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
        <Text style={styles.recipeText}>1) Place strawberries, honey, yogurt, lemon juice, and banana into a blender or food processor.</Text>
        <Text style={styles.recipeText}>2) Blend until creamy (about 5 minutes).</Text>
        <Text style={styles.recipeText}>3) Serve immediately or store in the freezer in an airtight container.</Text>
        </View>
    </ScrollView>
      </>
    );
}
if (recipeNum == 5) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/chocolatechippumpkinbread.png')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3} minimumFontScale={0.5}>CHOCOLATE CHIP PUMPKIN BREAD</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>3 cups all-purpose flour, 2 ¼ tsp ground cinnamon, ¼ tsp nutmeg (optional), ¼ tsp cloves (optional), ¼ tsp ginger (optional), 1 tsp salt, 1 tsp baking soda, 4 large eggs, room temperature, 2 cups sugar, 2 cups canned pumpkin, 1 ½ cups vegetable oil, 2 cups chocolate chips</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
            <Text style={styles.recipeText}>1) Preheat oven to 350º F.</Text>
            <Text style={styles.recipeText}>2) Sift flour, cinnamon, optional spices, salt, and baking soda into a large bowl.</Text>
            <Text style={styles.recipeText}>3) In another bowl, mix eggs, sugar, pumpkin, and vegetable oil with an electric mixer or by hand until fully incorporated.</Text>
            <Text style={styles.recipeText}>4) Mix in dry ingredients by thirds until a smooth texture is formed.</Text>
            <Text style={styles.recipeText}>5) Pour into 2 greased 8x4 in pans.</Text>
            <Text style={styles.recipeText}>6) Bake for 70 minutes or until an inserted toothpick comes out clean.</Text>
            <Text style={styles.recipeText}>7) Let cool for 10 minutes and enjoy!</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 6) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/tomatosalsa.jpeg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>TOMATO SALSA</Text>
          </View>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Text style={styles.paragraph}>Ingredients: 2 tomatoes, 1 tsp lime juice, ½ onion, ¼ cup cilantro, Salt and pepper to taste</Text>
            </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
            <Text style={styles.recipeText}>1) Dice tomatoes and onion into small pieces.</Text>
            <Text style={styles.recipeText}>2) Chop cilantro finely.</Text>
            <Text style={styles.recipeText}>3) Put tomatoes, onion, and cilantro into a bowl.</Text>
            <Text style={styles.recipeText}>4) Add lime juice.</Text>
            <Text style={styles.recipeText}>5) Add salt and pepper to taste.</Text>
            <Text style={styles.recipeText}>6) Stir together and enjoy!</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 7) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/baconandwhitecheddarrissoto.jpg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>BACON AND WHITE CHEDDAR RISSOTO</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>4 cups unsalted imitation chicken stock , 4 fresh thyme sprigs , 2 tbs bacon crumbles (or bacon bits), ½ onion diced, 1 cup Arborio rice , ½ cup dry white wine , Salt and pepper to taste, 1 cup frozen green peas, thawed , 1 teaspoon finely chopped fresh thyme , 3 ounces white cheddar cheese, shredded (¾ cup) , ¼ cup thinly sliced green onions</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
            <Text style={styles.recipeText}>1) Bring stock and thyme sprigs to a simmer in a saucepan over medium; keep warm over low.</Text>
            <Text style={styles.recipeText}>2) Cook bacon in a large pan over medium for 4 minutes or until crisp. Remove from pan. </Text>
            <Text style={styles.recipeText}>3) Add onion; sauté 4 minutes.</Text>
            <Text style={styles.recipeText}>4) Add rice; cook 1 minute, stirring to coat.</Text>
            <Text style={styles.recipeText}>5) Add wine; cook 2 minutes or until liquid is absorbed, stirring frequently.</Text>
            <Text style={styles.recipeText}>6) Stir in 1 1/2 cups stock; cook 4 minutes or until liquid is nearly absorbed, stirring frequently.</Text>
            <Text style={styles.recipeText}>7) Stir in salt and pepper.</Text>
            <Text style={styles.recipeText}>8) Stir in peas, chopped thyme, and cheese; cook 2 minutes.</Text>
            <Text style={styles.recipeText}>8) Remove pan from heat; stir in reserved 1/4 cup stock. Divide rice mixture among 4 bowls; top with green onions and bacon.</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 8) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/chickenpestobake.jpeg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>CHICKEN PESTO BAKE</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>1 cup fresh basil leaves, 1 Tbsp pine nuts OR walnuts, 1 Large garlic clove, ¼ cup extra virgin olive oil, ¼ cup grated parmesan cheese , 2 8oz chicken breasts, Sliced Mozzarella Cheese , salt to taste</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
            <Text style={styles.recipeText}>1) Preheat oven to 350°.</Text>
            <Text style={styles.recipeText}>2) Add basil, pine nuts/walnuts, garlic, and parmesan cheese to the food processor and begin blending.</Text>
            <Text style={styles.recipeText}>3) Slowly add in the olive oil until the mixture becomes smooth, add salt to taste.</Text>
            <Text style={styles.recipeText}>4) Place the chicken into an oiled shallow pan.</Text>
            <Text style={styles.recipeText}>5) Season the chicken with salt, pepper, other seasonings and spoon a dollop of pesto on top of the chicken and spread evenly.</Text>
            <Text style={styles.recipeText}>6) Place a slice of fresh mozzarella on top of the pesto.</Text>
            <Text style={styles.recipeText}>7) Bake for 12-15mins or until internal temp reaches 165°.</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 9) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/kalesmoothie.jpeg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10, padding: 10}} adjustsFontSizeToFit numberOfLines={2}>KALE SMOOTHIE</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>1 whole banana, 1 cup of kale, ½ cup of blueberries(frozen or fresh), ½ cup of plain yogurt, ½ cup of apple juice, 1 tablespoon of flaxseed meal, ½ teaspoon of cinnamon, 1-2 handfuls of ice or to taste, Optional: a scoop of preferred protein pounder</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
            <Text style={styles.recipeText}>1) Place all ingredients in a high-speed blender and puree until smooth.</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 10) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/garlicchilebroccoli.jpg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>GARLIC CHILE BROCCOLI</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>1 head of broccoli (about ½ lb), 1 tablespoon unsalted vegetable broth, 1 clove of minced garlic (about ½ teaspoon), ½ of a small red jalapeño or Fresno chile stemmed, seeded, and cut into strips, 3 tablespoons of extra-virgin olive oil, ¼ teaspoon ground pepper, 1 tablespoon of lemon juiced</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE (4 servings):</Text>
            <Text style={styles.recipeText}>1) Put oil in a saucepan on medium-high heat.</Text>
            <Text style={styles.recipeText}>2) Put garlic and the chile in the pan for 1-2 mins.</Text>
            <Text style={styles.recipeText}>3) Add the broth and lemon juice to the pan.</Text>
            <Text style={styles.recipeText}>4) Add broccoli to the pan then sprinkle on the salt and pepper. Cook it until lightly charred and tender, about 10 minutes total.</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 11) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/sauteedgardenfreshgreenbeans.jpg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>SAUTEED GARDEN FRESH GREEN BEANS</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>1 head of broccoli (about ½ lb), 1 tablespoon unsalted vegetable broth, 1 clove of minced garlic (about ½ teaspoon), ½ of a small red jalapeño or Fresno chile stemmed, seeded, and cut into strips, 3 tablespoons of extra-virgin olive oil, ¼ teaspoon ground pepper, 1 tablespoon of lemon juiced</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE (4 servings):</Text>
            <Text style={styles.recipeText}>1) Heat olive oil in a saucepan over medium heat.</Text>
            <Text style={styles.recipeText}>2) Add green beans and onion then mix.</Text>
            <Text style={styles.recipeText}>3) Sprinkle on some of the garlic salt and pepper (if you want pepper), mix then add the rest of the seasoning.</Text>
            <Text style={styles.recipeText}>4) Cook until beans are tender, about 10-15 mins.</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 12) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/kale.png')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={1}>KALE</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>1 Medium Onion, 4 Garlic Cloves, 2 cups of Heavy Cream, ¾ tsp of kosher salt, ½ tsp of ground pepper, 3 Bunches of Kale, ¼ tsp red pepper flakes, 6 oz. sharp cheddar cheese</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE - CREAM:</Text>
            <Text style={styles.recipeText}>1) Preheat oven to 350°F.</Text>
            <Text style={styles.recipeText}>2) Peel and quarter onion, Smash 4 garlic cloves and unpeel, Pour in 2 cups of heavy cream, Stir in ¾ tsp. Kosher salt, and ½ tsp.</Text>
            <Text style={styles.recipeText}>3) Ground pepper. Bring to simmer over low heat, stirring occasionally, until garlic and onion are soft (15-20 mins).</Text>
            <Text style={styles.recipeText}>4) When ready add ¼ tsp. Crushed red pepper flakes.</Text>
            <Text style={styles.recipeText}>5) Transfer to a blender and blend until smooth.</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE - KALE:</Text>
            <Text style={styles.recipeText}>1) Remove rib of 3 bunches of kale and wash.</Text>
            <Text style={styles.recipeText}>2) Heat a large skillet over medium heat.</Text>
            <Text style={styles.recipeText}>3) Add about ¼ of the kale and cover. Cook until wilted (3-4 mins).</Text>
            <Text style={styles.recipeText}>4) Push wilted kale to the side of the skillet and add another ¼. Continue until kale is gone.</Text>
            <Text style={styles.recipeText}>5) Remove from heat and pour cream over.</Text>
            <Text style={styles.recipeText}>6) Place thick slices of sharp cheddar cheese on top and add salt and pepper if wanted.</Text>
            <Text style={styles.recipeText}>7) Remove from heat and pour cream over.</Text>
            <Text style={styles.recipeText}>8) Place it in the oven and cook for 50-55 mins.</Text>
            <Text style={styles.recipeText}>9) Let cool for 5 minutes before serving.</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 13) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/ratatouille.jpg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={1}>RATATOUILLE</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>2 tablespoons olive oil , 3 cloves garlic - minced, 2 teaspoons fresh parsley, 1 eggplant - cut into 1/2 inch cubes, salt to taste, 1 cup grated Parmesan cheese, 3 medium zucchini - sliced, 1 large onion - sliced into rings, 2 cups sliced fresh mushrooms, 1 red bell pepper - sliced, 2 large tomatoes - chopped</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
            <Text style={styles.recipeText}>1) Preheat oven to 350 degrees F (175 degrees C). Coat bottom and sides of a 1 1/2 quart casserole dish with 1 tablespoon olive oil.</Text>
            <Text style={styles.recipeText}>2) Heat remaining 1 tablespoon olive oil in a medium skillet over medium heat. Cook and stir garlic until lightly browned. Mix in parsley and eggplant. Cook and stir until eggplant is soft, about 10 minutes. Season with salt to taste.</Text>
            <Text style={styles.recipeText}>3) Spread eggplant mixture evenly across bottom of prepared casserole dish. Sprinkle with a few tablespoons of Parmesan cheese. Spread zucchini in an even layer over top. Lightly salt and sprinkle with a little more cheese. Continue layering in this fashion, with onion, mushrooms, bell pepper, and tomatoes, covering each layer with a sprinkling of salt and cheese.</Text>
            <Text style={styles.recipeText}>4) Bake in preheated oven for 45 minutes.</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 14) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/redleafsalad.jpeg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>RED LEAF SALAD</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>1 head red leaf lettuce, ½ long English cucumber, 4-5 radishes one small bunch, 1-2 cups grape tomatoes, 1 green onion, ¼-cup fresh cilantro, 1 banana pepper, 1 can black olives</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
            <Text style={styles.recipeText}>1) Wash and dry all produce.</Text>
            <Text style={styles.recipeText}>2) Tear lettuce into bite size pieces.</Text>
            <Text style={styles.recipeText}>3) Chop cucumber, slice radishes, have grape tomatoes, chop green onion into small pieces, cut banana pepper in 2 centimeter pieces, and pour can of black olives</Text>
            <Text style={styles.recipeText}>4) Place all ingredients into large bowl.</Text>
            <Text style={styles.recipeText}>5) Sprinkle cilantro and then toss salad.</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 15) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/greenfriedcabbage.jpg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>GREEN FRIED CABBAGE</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>3 tbsp of olive oil, 1 red onion , 2 tomatoes, 1 ½  tsp salt, 2 tbsp tomato paste</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
            <Text style={styles.recipeText}>1) Cut the cabbage in half, then cut it into long strips</Text>
            <Text style={styles.recipeText}>2) Cut the onion into large strips, cut the tomatoes into small pieces</Text>
            <Text style={styles.recipeText}>3) On moderate heat, fry the onions in the olive oil until lightly browned</Text>
            <Text style={styles.recipeText}>4) Add the cut tomatoes</Text>
            <Text style={styles.recipeText}>5) When the tomatoes are softened, pour in the salt and stir until mixed </Text>
            <Text style={styles.recipeText}>6) Gently add the cut cabbage into the onion and tomatoes mixture</Text>
            <Text style={styles.recipeText}>7) Stir occasionally</Text>
            <Text style={styles.recipeText}>8) Add the tomato paste and stir </Text>
            <Text style={styles.recipeText}>9) Over the pot, turn down the heat to a light simmer</Text>
            <Text style={styles.recipeText}>9) Cook until cabbage is slightly crunchy</Text>
            <Text style={styles.recipeText}>10) Serve and enjoy!</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 16) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/capresesalad.png')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>CAPRESE SALAD</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>1 1/2 cup balsamic vinegar, 1/4 cup honey, 3 large tomatoes, cut into 1/2-inch slices, 1 (16 ounce) package fresh mozzarella cheese, cut into 1/4-inch slices, 1/4 teaspoon salt, 1/4 teaspoon ground black pepper, 3/4 cup fresh basil leaves, 1/4 cup extra-virgin olive oil</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE (4 SERVINGS):</Text>
            <Text style={styles.recipeText}>1) In a small saucepan, mix together the balsamic vinegar and honey, and put over high heat. Bring to a boil, reduce the heat to low and simmer for about 10 minutes until the vinegar mixture has decreased to 1/3 cup. Put aside the balsamic reduction to chill.</Text>
            <Text style={styles.recipeText}>2) On a serving plate, place alternating slices of tomato and mozzarella cheese decoratively. Sprinkle with salt and black pepper, finish the salad with fresh basil leaves and drizzle with the olive oil and balsamic combination over the top.</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 17) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/leaflettucesalad.jpeg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>LEAF LETTUCE SALAD</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
            <Text style={styles.paragraph}>2 Oranges , 2 carrots, ½ cup salad oil (Or olive oil), 2 tablespoons white wine vinegar, 1 tbsp sugar , 2 pounds red tipped leaf lettuce</Text>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE (SERVES 4):</Text>
            <Text style={styles.recipeText}>1) First, juice one orange and segment the other.</Text>
            <Text style={styles.recipeText}>2) Julienne the carrot.</Text>
            <Text style={styles.recipeText}>3) After this, mix together the salad oil, vinegar, sugar, and orange juice with a fork until combined.</Text>
            <Text style={styles.recipeText}>4) Next, mix your lettuce and carrots, pour the dressing over the salad, and finally add your segmented oranges.</Text>
            </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 18) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/basilpeachlemonade.jpg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>BASIL PEACH LEMONADE</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
                <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
                <Text style={styles.paragraph}>1 ¼ cup lemon juice (about 8 lemons), 1 cup fresh basil, 1 cup frozen peaches (thawed), 2 tbsp honey, 3 cups cold water, 1 cup ice, 1 lemon cut into slices or wedges for garnish, ¼ Basil for garnish</Text>
                <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
                <Text style={styles.recipeText}>1) Juice the lemons and strain out pulp/seeds.</Text>
                <Text style={styles.recipeText}>2) Blend lemon juice, peach slices, basil, and honey until smooth.</Text>
                <Text style={styles.recipeText}>3) Let sit for 30 minutes to an hour.</Text>
                <Text style={styles.recipeText}>4) Strain into pitcher, add water, and mix.</Text>
                <Text style={styles.recipeText}>5) Chill until ready to serve.</Text>
                <Text style={styles.recipeText}>6) Serve over ice and garnish with lemon segments and basil leaves.</Text>
                </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 19) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/broccoliandcheddarcasserole.jpg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>BROCCOLI AND CHEDDAR CASSEROLE</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
        <Text style={styles.paragraph}>1 can of Low sodium condensed cream of mushroom, ½ cup of mayo, ½ cup of fat free sour cream, ¼ cup yellow onions chopped, ½ of shredded cheese cheese, ½ cup of monterey jack cheese, salt and pepper and paprika, rit crackers, 3 bags of frozen broccoli</Text>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
        <Text style={styles.recipeText}>1) preheat oven to 350</Text>
        <Text style={styles.recipeText}>2) whisk together condensed soup, mayonnaise, egg and onions</Text>
        <Text style={styles.recipeText}>3) place frozen broccoli in</Text>
        <Text style={styles.recipeText}>4) mix all ingredients together and place in dish</Text>
        <Text style={styles.recipeText}>5) sprinkle cheese on top of casserole as well as in it</Text>
        <Text style={styles.recipeText}>6) bake for 45 mins</Text>
        <Text style={styles.recipeText}>7) serving size - 8 people</Text>
        </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 20) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/ceviche.jpg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>CEVICHE</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
        <Text style={styles.paragraph}>1 pound peeled and deveined shrimp, ¼ cup freshly squeezed lemon juice (from 3 lemons), ¼ cup freshly squeezed lime juice (from 2 limes), 2 tomatoes, seeded and chopped, ½ small red onion - finely chopped, 1 medium jalapeno seeded and finely chopped, 1 cup chopped fresh cilantro leaves and stem, 1 medium avocado, Serve with tortilla chips</Text>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
        <Text style={styles.recipeText}>1) Bring a large pot of salted water and bring to a boil over high heat.</Text>
        <Text style={styles.recipeText}>2) Turn off the heat, add the shrimp and poach until opaque, 2 to 3 minutes.</Text>
        <Text style={styles.recipeText}>3) Drain the shrimp and set aside until cool enough to handle, about 10 minutes.</Text>
        <Text style={styles.recipeText}>4) Chop the shrimp into ½ inch pieces and place in large bowl.</Text>
        <Text style={styles.recipeText}>5) Add the lemon juice, lime juice, tomatoes, red onions, jalapenos and cilantro to combine.</Text>
        <Text style={styles.recipeText}>6) Cover and refrigerate for at least an hour.</Text>
        <Text style={styles.recipeText}>7) Just before serving dice the avocado, add to the ceviche and gently toss to combine.</Text>
        </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 21) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/cucumbersalad.jpg')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>CUCUMBER SALAD</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
        <Text style={styles.paragraph}>3 cucumbers thinly sliced, 1 red onion thinly sliced , ½ cup sour cream, 1 Tbsp white vinegar, 2 tsp fresh Dill, 1 tsp sugar , ½ tsp salt, 1 clove fresh minced garlic, 1 teaspoon lemon juice</Text>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
        <Text style={styles.recipeText}>1) Combine Minced garlic, white vinegar, Dill, sugar, salt, lemon juice, and sour Cream in a bowl.</Text>
        <Text style={styles.recipeText}>2) Once combined add Cucumbers and Onion and combine with the dressing. Cover and let set in refrigerator for already 2 hours.</Text>
        <Text style={styles.recipeText}>3) Yields 8 servings.</Text>
        </View>
  </ScrollView>
    </>
  );
}
if (recipeNum == 22) {
  return (
    <>
    <StatusBar style={{barStyle: "light-content"}}></StatusBar>

  <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '100%', width: '100%', flex: 1}}>
          <Image source={require('./recipeimages/strawberrylemonsalad.png')} style={{height: windowHeight, width: '100%', position: "relative", top: 0, bottom: 0}} />
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: "bold", fontSize: 60, color: "white", overflow: "visible", flexWrap: "wrap", padding: 10}} adjustsFontSizeToFit numberOfLines={3}>STRAWBERRY LEMON VINAIGRETTE SALAD</Text>
          </View>
      </View>
      <View style={{padding: 30, backgroundColor: "#BCE4DE"}}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>INGREDIENTS:</Text>
        <Text style={styles.paragraph}>1 ½ cups diced strawberries, or apples, 2 tablespoons balsamic vinegar, 1 tsp agave, 2 tsp lemon juice, 3 tbs olive oil, 6oz microgreens, 12 snow peas thinly sliced, 2 radishes thinly sliced, Halved strawberries/apples</Text>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>RECIPE:</Text>
        <Text style={styles.recipeText}>1) To make Vinaigrette: Combine strawberries, vinegar, and agave in a bowl. Let it stand 30 minutes. Strain the liquid into a small bowl (keeping strawberries, or apples separate), and stir in lemon juice and oil. Season with salt and pepper, if you want a little more flavor</Text>
        <Text style={styles.recipeText}>2) Once combined add Cucumbers and Onion and combine with the dressing. Cover and let set in refrigerator for already 2 hours.</Text>
        <Text style={styles.recipeText}>3) Yields 8 servings.</Text>
        </View>
  </ScrollView>
    </>
  );
}
    else {
        return (
        <>
      <StatusBar></StatusBar>
      <SafeAreaView>
        <View style={{justifyContent: "center", alignContent: "center"}}><Text>RECIPENUM IS NIL</Text></View>
        </SafeAreaView>
      </>
        );
    }
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
  },
  container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: "center",
  },
  paragraph: {
    textAlign: 'center',
    padding: 40,
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
  },
  recipeText: {
      fontSize: 20,
      fontWeight: "bold",
  }
});

export default RecipePage;