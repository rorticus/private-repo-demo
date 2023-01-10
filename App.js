import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { sharedBusinessLogic } from '@rorticus/private-repo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>The value returned is {sharedBusinessLogic()}</Text>
      <StatusBar style="auto" />
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
});
