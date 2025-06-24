import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Login'), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>CyberGuard</Text>
      <Text style={styles.slogan}>Secure Your Digital Life</Text>
      <ActivityIndicator size="large" color="#00f6ff" style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#011923',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    tintColor: '#00f6ff', // Optional if logo is monochrome or white
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00f6ff',
    marginBottom: 10,
  },
  slogan: {
    fontSize: 16,
    color: '#00f6ffcc',
  },
});
