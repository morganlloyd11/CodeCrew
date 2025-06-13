// import react
import React from 'react';

// import map view and marker
import MapView, { Marker, Callout } from 'react-native-maps';

// components from react native
import { View, StyleSheet, Dimensions, Text } from 'react-native';

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
        {/* set up the size and location of map */}
        <RectButton style={styles.logoutButton} onPress={handleSignOut}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </RectButton>
      <MapView
        style={styles.map}
        // coordinates for me 
        initialRegion={{
          latitude: 51.0447,
          longitude: -114.0719,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* adding pin to map */}
        <Marker
          coordinate={{
            latitude: 51.0447,
            longitude: -114.0719,
          }}
        >
          {/*make the pin clickable */}
          <Callout
            onPress={() => {
              // go to profile screen when pin is tapped
              navigation.navigate('Profile', { githubUsername });
            }}
          >
            {/* shows up name bubble on pin */}
            <View>
              <Text style={styles.calloutText}>{githubUsername}</Text>
              <Text style={styles.calloutHint}> view profile →</Text>
            </View>
          </Callout>
        </Marker>
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
  calloutText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  calloutHint: {
    fontSize: 15,
    color: 'gray',
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
