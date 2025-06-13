// import react
import React from 'react';

// import navigation container
import { NavigationContainer } from '@react-navigation/native';

// import gesture root view
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import your nav stack
import AppNavigator from './navigation/AppNavigator';

// import styling
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    // gesture handler wrapping over nav and app
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
