import { StyleSheet, Text, View } from 'react-native';

export default function New() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});
