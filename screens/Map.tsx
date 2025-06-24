// import react
import React, { useEffect, useState } from 'react';

// import map view and marker
import MapView, { Marker, Callout } from 'react-native-maps';

// components from react native
import { View, StyleSheet, Dimensions, Text } from 'react-native';

// import user marker component
import UserMarker from '../components/UserMarker';

// status bar 
import { StatusBar } from 'expo-status-bar';

// mobile button
import { RectButton } from 'react-native-gesture-handler';

// navigation props
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// import shared nav types
import { RootStackParamList } from '../types';

// fetch all users from backend
import { getAllUsers } from '../services/api';

// set up props so we can get githubUsername
type Props = NativeStackScreenProps<RootStackParamList, 'Map'>;

// main screen with map
export default function Map({ route, navigation }: Props) {
  const { githubUsername } = route.params;

  // store the list of users to show on the map
  const [users, setUsers] = useState([]);

  // fetch users from backend when screen loads
  useEffect(() => {
    const loadUsers = async () => {
      const data = await getAllUsers();
      console.log('fetched users:', data);
      setUsers(data);
    };

    loadUsers();
  }, []);

  // function to send user back to SignIn screen
  const handleSignOut = () => {
    navigation.replace('SignIn');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* sign out button */}
      <RectButton style={styles.logoutButton} onPress={handleSignOut}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </RectButton>

      {/* map view that fills screen */}
      <MapView
        style={styles.map}
        initialRegion={{
          // downtown yyc
          latitude: 51.0447,
          longitude: -114.0719,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* show a pin for each user */}
        {users.map((user: any, index: number) => (
          <Marker
            key={index}
            coordinate={{
              latitude: user.latitude,
              longitude: user.longitude,
            }}
          >
            {/* tap to go to profile screen */}
            <Callout onPress={() => navigation.navigate('Profile', { githubUsername: user.username })}>
              <View style={{ alignItems: 'center' }}>
                <Text>@{user.username}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //make map fill screen
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  logoutButton: {
    position: 'absolute',
    top: 48,
    right: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#bc9bf3',
    borderRadius: 6,
    zIndex: 1,
  },
  logoutText: {
    color: 'white',
    fontSize: 14,
  },
});
