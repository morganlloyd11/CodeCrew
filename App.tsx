// import react
import React from 'react';

// import navigation container
import { NavigationContainer } from '@react-navigation/native';

// import gesture root view (needed for buttons & gestures to work!)
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import your nav stack
import AppNavigator from './navigation/AppNavigator';

// import styling
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    // gesture handler must wrap the entire app
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

// full screen style for the gesture container
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
