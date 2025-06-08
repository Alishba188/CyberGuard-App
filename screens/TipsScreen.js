import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

const tips = [
  { id: '1', icon: 'shield-checkmark', tip: 'Never share OTPs or passwords with anyone.' },
  { id: '2', icon: 'lock-closed', tip: 'Use strong, unique passwords for each account.' },
  { id: '3', icon: 'cloud-download', tip: 'Avoid downloading unknown apps or files.' },
  { id: '4', icon: 'wifi', tip: 'Avoid public Wi-Fi for sensitive transactions.' },
  { id: '5', icon: 'bug', tip: 'Keep your OS and apps updated.' },
  { id: '6', icon: 'eye-off', tip: 'Cover your webcam when not in use to protect your privacy.' },
  { id: '7', icon: 'mail-unread', tip: 'Watch out for suspicious emails and phishing links.' },
  { id: '8', icon: 'key', tip: 'Enable two-factor authentication where possible.' },
  { id: '9', icon: 'alert-circle', tip: 'Regularly review your account activity for unauthorized access.' },
  { id: '10', icon: 'trash', tip: 'Securely delete sensitive files you no longer need.' },
  { id: '11', icon: 'person', tip: 'Be cautious about what you share on social media.' },
  { id: '12', icon: 'camera', tip: 'Disable location access for apps that don’t need it.' },
];

export default function TipsScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.primary }]}>Cyber Safety Tips</Text>
      <FlatList
        data={tips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Ionicons name={item.icon} size={24} color={colors.primary} style={{ marginRight: 10 }} />
            <Text style={[styles.text, { color: colors.text }]}>{item.tip}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, marginBottom: 20, fontWeight: 'bold' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: { flex: 1 },
});
