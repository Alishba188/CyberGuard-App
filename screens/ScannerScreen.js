import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function ScannerScreen() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);

  const handleScan = () => {
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      setScanning(false);
      setResult('No threats found.');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Your Device</Text>

      <TouchableOpacity
        style={[styles.button, scanning && { opacity: 0.6 }]}
        onPress={handleScan}
        disabled={scanning}
      >
        <Text style={styles.buttonText}>{scanning ? 'Scanning...' : 'Start Scan'}</Text>
      </TouchableOpacity>

      {scanning && (
        <ActivityIndicator
          size="large"
          color="#00f6ff"
          style={{ marginTop: 30 }}
        />
      )}

      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012d3a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#ffffff',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 12,
    backgroundColor: '#1f2d3d',
    borderColor: '#00f6ff',
    borderWidth: 2,
    shadowColor: '#00f6ff',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#00f6ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    color: '#00f6ff',
    marginTop: 30,
    textAlign: 'center',
  },
});
