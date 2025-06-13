// import react and state
import React, { useState } from 'react';

// basic UI components from react native
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';

// status bar at top of screen
import { StatusBar } from 'expo-status-bar';

// mobile button
import { RectButton } from 'react-native-gesture-handler';

// access to nav props
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// shared nav types
import { RootStackParamList } from '../types';

// function to check if github username exists
import { getUserInfo } from '../services/github';

// set up the nav props
type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

// screen the user first sees 
export default function SignIn({ navigation }: Props) {
  // collecting and storing user input
  const [username, setUsername] = useState('');

  // this runs when the user taps the sign button
  const handleSignUp = async () => {
    if (!username) {
      Alert.alert('Please enter a GitHub username.');
      return;
    }

    try {
      // fetch user from GitHub
      const user = await getUserInfo(username);

      if (user) {
        // if returns a valid user go to the map screen
        navigation.replace('Map', { githubUsername: username });
      }
    } catch (error) {
      // if the username doesn’t exist
      Alert.alert('There is no such username on GitHub.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* welcome text at the top */}
      <Text style={styles.title}>CODE CREW</Text>

      {/* input where the user types their GitHub username */}
      <TextInput
        placeholder="Enter your GitHub username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      {/* button to start sign up */}
      <RectButton style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </RectButton>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 16,
    height: 48,
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#031A62',
    height: 48,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});
