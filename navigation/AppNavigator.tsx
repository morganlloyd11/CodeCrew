// import react
import React from 'react';

// stack navigation to change screens
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import type definitions for screen parameters
import { RootStackParamList } from '../types';

// import screens

// sign up with GitHub screen
import SignIn from '../screens/SignIn'; 

// screen with map
import Map from '../screens/Map';

// shows selected user info
import Profile from '../screens/Profile';

// creating a stack navigator with types
const Stack = createNativeStackNavigator<RootStackParamList>();

// function for nav component
export default function AppNavigator() {
  return (
    // wrap screens in navigator 
    <Stack.Navigator
      // show sign in screen first
      initialRouteName="SignIn" 
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* sign in screen */}
      <Stack.Screen name="SignIn" component={SignIn} />

      {/* screen with map of users */}
      <Stack.Screen name="Map" component={Map} />

      {/* profile view screen */}
      <Stack.Screen 
      name="Profile" 
      component={Profile}
      options={{
        title: 'GitHub Profile',
        headerShown: true,
        headerStyle: {
      backgroundColor: '#031A62',
    },
    headerTintColor: '#fff', 
    headerTitleAlign: 'center',
      }

      } />
    </Stack.Navigator>
  );
}