import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Validation Error', 'Email and password are required.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back you've been missed!</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="black"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="black"
          style={[styles.input, styles.passwordInput]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={22}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert('Reset Password')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={[styles.link, { marginTop: 10 }]}
      >
        <Text style={styles.secondaryButton}>Create new account</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Copyright by Alishba</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#012d3a',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#cccccc',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#f0f4f8',
    color: '#000',
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 18,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#1f2d3d',
    shadowColor: '#00f6ff',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 14,
    alignItems: 'center',
  },
  linkText: {
    color: '#cccccc',
    textDecorationLine: 'underline',
  },
  secondaryButton: {
    color: '#012d3a',
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    marginTop: 70,
    color: '#888',
    fontSize: 12,
  },
});
