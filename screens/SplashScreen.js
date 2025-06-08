import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
export default function SplashScreen({ navigation }) {
  const { colors } = useTheme();
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2000);
  }, []);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={[styles.title, { color: colors.primary }]}>CyberGuard</Text>
      <Text style={[styles.slogan, { color: colors.text }]}>Secure Your Digital Life</Text>
      <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 20 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 100, height: 100, marginBottom: 20 },
  title: { fontFamily: 'Inter-Bold', fontSize: 26, marginBottom: 10 },
  slogan: { fontSize: 16 },
});
