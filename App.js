import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Form from './components/Form'

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Form />
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
