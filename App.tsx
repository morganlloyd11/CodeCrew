// import react
import React from 'react';

// import nav container to wrap app
import { NavigationContainer } from '@react-navigation/native';

// import app nav that defines the screens
import AppNavigator from './navigation/AppNavigator';

// root component 
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
