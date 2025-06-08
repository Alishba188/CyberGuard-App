import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Welcome to CyberGuard</Text>
      <TouchableOpacity
        style={[styles.button, { borderColor: colors.primary, backgroundColor: colors.card }]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={[styles.buttonText, { color: colors.primary }]}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { borderColor: colors.primary, backgroundColor: colors.card }]}
        onPress={() => navigation.navigate('Report')}
      >
        <Text style={[styles.buttonText, { color: colors.primary }]}>Report</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { borderColor: colors.primary, backgroundColor: colors.card }]}
        onPress={() => navigation.navigate('Scanner')}
      >
        <Text style={[styles.buttonText, { color: colors.primary }]}>Scanner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { borderColor: colors.primary, backgroundColor: colors.card }]}
        onPress={() => navigation.navigate('Tips')}
      >
        <Text style={[styles.buttonText, { color: colors.primary }]}>Tips</Text>
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
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
