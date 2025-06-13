// import react
import React from 'react';

// import map view and marker
import MapView, { Marker, Callout } from 'react-native-maps';

// components from react native
import { View, StyleSheet, Dimensions, Text } from 'react-native';

// import user marker component
import UserMarker from '../components/UserMarker';

// mobile button
import { RectButton } from 'react-native-gesture-handler';

// navigation props
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// import shared nav types
import { RootStackParamList } from '../types';

// set up props so we can get githubUsername
type Props = NativeStackScreenProps<RootStackParamList, 'Map'>;

// main screen with map
export default function Map({ route, navigation }: Props) {
  const { githubUsername } = route.params;

  // function to send user back to SignIn screen
  const handleSignOut = () => {
    navigation.replace('SignIn');
  };

  return (
    <View style={styles.container}>
        {/* sign out button */}
        <RectButton style={styles.logoutButton} onPress={handleSignOut}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </RectButton>
      {/* set up the size and location of map */}
      <MapView
        style={styles.map}
        // hard coded coordinates for dt yyc 
        initialRegion={{
          latitude: 51.0447,
          longitude: -114.0719,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
    {/* marker that shows the current user */}
    <UserMarker
        githubUsername={githubUsername}
        latitude={51.0447}
        longitude={-114.0719}
        onPress={() => navigation.navigate('Profile', { githubUsername })}
    />

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
  }
});
