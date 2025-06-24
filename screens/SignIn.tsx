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

// get phone location
import * as Location from 'expo-location';

// send requests to backend
import axios from 'axios';

// set up the nav props
type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

// screen the user first sees 
export default function SignIn({ navigation }: Props) {
  // collecting and storing user input
  const [username, setUsername] = useState('');

  // this runs when the user taps the sign button
const handleSignUp = async () => {
  // if the input box is empty show alert
  if (!username) {
    Alert.alert('please enter a github username :)');
    return;
  }

  try {
    // get github user info from api
    const user = await getUserInfo(username);

    // if no user is returned show an error
    if (!user) {
      Alert.alert('github user not found');
      return;
    }

    // ask for location permission from the phone
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('location permission denied :(');
      return;
    }

    // get the user's gps coordinates
    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    // send the user info to json-server to "register"
    await axios.post('http://10.0.0.151:3001/users', {
      username: username,
      name: user.name,
      avatar_url: user.avatar_url,
      bio: user.bio,
      latitude,
      longitude,
    });

    // navigate to the map screen
    navigation.replace('Map', { githubUsername: username });

  } catch (error) {
    // if anything goes wrong show a msg
    console.log(error);
    Alert.alert('something went wrong... try again?');
  }
};

  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>

      <Text style={styles.title}>CODE CREW</Text>

      {/* input where the user types their GitHub username */}
      <TextInput
        placeholder="please enter your github user name :)"
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
    backgroundColor: '#fff1eb',
  },
  title: {
    fontSize: 40,
    marginBottom: 24,
    textAlign: 'center',
    color: '#7360f9',
  },
  input: {
    
    borderWidth: 1,
    borderColor: '#b9d440',
    borderRadius: 6,
    paddingHorizontal: 16,
    height: 48,
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#bc9bf3',
    height: 48,
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});
