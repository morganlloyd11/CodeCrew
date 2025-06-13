// import react
import React from 'react';

// import map stuff
import { Marker, Callout } from 'react-native-maps';

// ui
import { View, Text, StyleSheet } from 'react-native';

// set the type of props this component expects
type Props = {
  githubUsername: string;
  latitude: number; 
  longitude: number;
  // what to do when call out is pressed
  onPress: () => void; 
};

// marker component 
export default function UserMarker({ githubUsername, latitude, longitude, onPress }: Props) {
  return (
    // drop a pin at the right spot
    <Marker coordinate={{ latitude, longitude }}>
      {/* pop up when the pin is tapped */}
      <Callout onPress={onPress}>
        <View>
          <Text style={styles.calloutText}>{githubUsername}</Text>
          <Text style={styles.calloutHint}>view profile →</Text>
        </View>
      </Callout>
    </Marker>
  );
}

// styles
const styles = StyleSheet.create({
  calloutText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  calloutHint: {
    fontSize: 15,
    color: 'gray',
  },
});
