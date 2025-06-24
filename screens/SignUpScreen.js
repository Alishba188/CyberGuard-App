import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!username || !email || !password) {
      Alert.alert('Missing Info', 'Please fill in all fields.');
      return;
    }

    Alert.alert('Success', 'Account created successfully!', [
      { text: 'Login', onPress: () => navigation.navigate('Login') },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor="#00f6ff88"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#00f6ff88"
        keyboardType="email-address"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#00f6ff88"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#011923',
  },
  title: {
    fontSize: 26,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00f6ff',
  },
  input: {
    backgroundColor: '#1f2d3d',
    borderColor: '#00f6ff',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    color: '#ffffff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1f2d3d',
    borderColor: '#00f6ff',
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#00f6ff',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#00f6ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    textAlign: 'center',
    marginTop: 20,
    color: '#00f6ff',
    textDecorationLine: 'underline',
  },
});
