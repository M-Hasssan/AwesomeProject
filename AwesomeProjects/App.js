import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      style={{width: 200, height: 150, margin: 50 }}
      source={{uri: 'https://logolook.net/wp-content/uploads/2023/11/Koenigsegg-Logo.png'}}
      />
      <Text style={{fontWeight:'bold', fontSize: 25, color: 'orange'}}>Get In Touch</Text>
      <TextInput placeholder='Email' style={styles.input} />
      <TextInput placeholder='Password' style={styles.pass} />
      <Text style={styles.log}>Login</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: "flex-start",
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 90,
    borderRadius: 100,
    width: 280,

  },

  pass: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    borderRadius: 100,
    width: 280,

  },

  log: {
    color: 'orange',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }

});
