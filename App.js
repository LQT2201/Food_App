import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import { AuthProvider } from './AuthContext.js';
import HomepageView from './views/Homepage/HomepageView.js';
import AccountScreen from './views/AccountScreen.js';
import FavouriteScreen from './views/FavouriteScreen.js';
import HomeNavigation from './navigation/HomeNav.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MainTabs = () => (
  <Tab.Navigator >
    <Tab.Screen name="Home" component={HomeNavigation}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ), headerShown: false
      }} />
    <Tab.Screen name="Favourites" component={FavouriteScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart" color={color} size={size} />
        ), headerShown: false
      }}
    />
    <Tab.Screen name="Account" component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ), headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginView}
          />
          <Stack.Screen
            name="Signup"
            component={SignupView}
          />
          <Stack.Screen
            name="Homepage"
            component={MainTabs}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}


export default App;