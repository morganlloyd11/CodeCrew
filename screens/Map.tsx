// import react
import React from 'react';

// import map view and marker
import MapView, { Marker, Callout } from 'react-native-maps';

// components from react native
import { View, StyleSheet, Dimensions, Text } from 'react-native';

// navigation props
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// import shared nav types
import { RootStackParamList } from '../types';

// set up props so we can get githubUsername
type Props = NativeStackScreenProps<RootStackParamList, 'Map'>;

// main screen with map
export default function Map({ route, navigation }: Props) {
  const { githubUsername } = route.params;

  return (
    <View style={styles.container}>
        {/* set up the size and location of map */}
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
          {/*makes the pin clickable */}
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
});
