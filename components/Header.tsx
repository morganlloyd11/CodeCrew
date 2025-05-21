import { Text, StyleSheet } from 'react-native';

export default function Header() {
     return <Text style={styles.title}>CodeCrew</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },
});