import React, { useState } from 'react';
import {
  View, Text, Switch, StyleSheet, TouchableOpacity, Image, TextInput, Alert, Modal, FlatList
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useThemeContext } from '../components/ThemeContext';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
  const { colors } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();

  const [name, setName] = useState('Alishba');
  const [email, setEmail] = useState('alishba.bano188@gmail.com');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationSharing, setLocationSharing] = useState(false);
  const [biometricAuth, setBiometricAuth] = useState(false);
  const [language, setLanguage] = useState('English');
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const languages = ['English', 'Spanish', 'French', 'German', 'Hindi'];

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out.');
    navigation.replace('Login');
  };

  const handleClearCache = () => {
    Alert.alert('Cache Cleared', 'App cache has been successfully cleared.');
  };

  const handleFeedback = () => {
    Alert.alert('Rate Us', 'Redirecting to app store...');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      {/* Avatar and Info */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/avatar.png')}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <TextInput
            value={name}
            onChangeText={setName}
            style={[styles.nameInput, { color: colors.text }]}
            placeholder="Name"
            placeholderTextColor={colors.border}
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={[styles.emailInput, { color: colors.text }]}
            placeholder="Email"
            placeholderTextColor={colors.border}
          />
        </View>
      </View>

      <View style={[styles.divider, { borderBottomColor: colors.border }]} />

      {/* Toggles */}
      <SettingToggle icon="moon" label="Dark Mode" value={isDark} onValueChange={toggleTheme} />
      <SettingToggle icon="notifications" label="Push Notifications" value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
      <SettingToggle icon="location" label="Location Sharing" value={locationSharing} onValueChange={setLocationSharing} />
      <SettingToggle icon="finger-print" label="Biometric Authentication" value={biometricAuth} onValueChange={setBiometricAuth} />

      {/* Language Modal */}
      <TouchableOpacity onPress={() => setLanguageModalVisible(true)} style={styles.option}>
        <Ionicons name="language" size={20} color={colors.primary} />
        <Text style={[styles.optionText, { color: colors.text }]}>Language: {language}</Text>
      </TouchableOpacity>

      <Modal visible={languageModalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>Select Language</Text>
            <FlatList
              data={languages}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setLanguage(item);
                    setLanguageModalVisible(false);
                  }}
                  style={styles.modalOption}
                >
                  <Text style={[styles.modalOptionText, { color: colors.text }]}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Actions */}
      <ActionItem icon="trash-2" label="Clear Cache" onPress={handleClearCache} />
      <ActionItem icon="star" label="Rate & Feedback" onPress={handleFeedback} />
      <ActionItem icon="shield" label="Security Center" onPress={() => Alert.alert('Security Center', 'Coming soon...')} />

      {/* Logout */}
      <TouchableOpacity onPress={handleLogout} style={[styles.logoutButton, { borderColor: colors.primary }]}>
        <Ionicons name="log-out-outline" size={20} color={colors.primary} />
        <Text style={[styles.logoutText, { color: colors.primary }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

// Toggle Row Component
function SettingToggle({ icon, label, value, onValueChange }) {
  const { colors } = useTheme();
  return (
    <View style={styles.row}>
      <View style={styles.rowLeft}>
        <Ionicons name={icon} size={20} color={colors.text} style={{ marginRight: 10 }} />
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      </View>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

// Action Row Component
function ActionItem({ icon, label, onPress }) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <Feather name={icon} size={20} color={colors.primary} />
      <Text style={[styles.optionText, { color: colors.text }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
  nameInput: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  emailInput: { fontSize: 14, opacity: 0.8 },
  divider: { borderBottomWidth: 1, marginVertical: 20 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: { fontSize: 16 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 30,
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: {
    paddingVertical: 10,
  },
  modalOptionText: {
    fontSize: 16,
  },
});
