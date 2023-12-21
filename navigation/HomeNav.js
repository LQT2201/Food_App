import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomepageView from '../views/Homepage/HomepageView';
import RecipeDetail from '../views/Homepage/RecipeDetail';



const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    
      <Stack.Navigator initialRouteName='HomepageView' screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomepageView" component={HomepageView} />
        <Stack.Screen name="RecipeDetail" options={{presentation: 'fullScreenModal'}} component={RecipeDetail} />
      </Stack.Navigator>
    
  );
}

export default HomeNavigation;