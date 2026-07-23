import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text> welcome to my app</Text>
      <Text> Please enter your name</Text>
      <TextInput placeholder="John" />
      <Text> Please enter your surname</Text>
      <TextInput placeholder="Doe" />

      <Button title = "Add user" />

      <StatusBar style="auto" />
    </View>  
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#ab5252',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
