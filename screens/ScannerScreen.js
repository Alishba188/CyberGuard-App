import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function ScannerScreen() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const { colors } = useTheme();

  const handleScan = () => {
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      setScanning(false);
      setResult('No threats found.');
    }, 3000);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary }]}>Scan Your Device</Text>

      <TouchableOpacity
        style={[styles.button, { borderColor: colors.primary }]}
        onPress={handleScan}
      >
        <Text style={[styles.buttonText, { color: colors.primary }]}>Start Scan</Text>
      </TouchableOpacity>

      {scanning && (
        <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 30 }} />
      )}
      {result && <Text style={[styles.result, { color: colors.primary }]}>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    marginTop: 30,
  },
});
