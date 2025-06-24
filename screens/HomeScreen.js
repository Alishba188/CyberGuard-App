import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CyberGuard</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Report')}>
        <Text style={styles.buttonText}>Report</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Scanner')}>
        <Text style={styles.buttonText}>Scanner</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tips')}>
        <Text style={styles.buttonText}>Tips</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#012d3a', // deep dark background
  },
  title: {
    fontSize: 26,
    marginBottom: 30,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#1f2d3d',
    shadowColor: '#00f6ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 16,
  },
});
