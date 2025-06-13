// import react
import React from 'react';

// webview to view webpage inside app
import { WebView } from 'react-native-webview';

// status bar 
import { StatusBar } from 'expo-status-bar';

// navigation types to read the dat that is passed in
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// file to store shared data types
import { RootStackParamList } from '../types';

// set up what props this screen needs - username
type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;


// component that shows the profile
export default function Profile({ route }: Props) {
  // get username passed from map screen
  const { githubUsername } = route.params;

  return (
    <>
      <StatusBar hidden />

      {/* show github page in app*/}
      <WebView
      //make fullscreen
        style={{ flex: 1 }}
        // load the users page
        source={{ uri: `https://github.com/${githubUsername}` }}
      />
    </>
  );
}
