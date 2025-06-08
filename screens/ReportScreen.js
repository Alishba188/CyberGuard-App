import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useTheme } from '@react-navigation/native';

export default function ReportScreen() {
  const { colors } = useTheme();

  const [type, setType] = useState('Phishing');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);
  const [history, setHistory] = useState([]);

  const handleSubmit = () => {
    if (!desc.trim()) {
      Alert.alert('Missing Info', 'Please provide a description of the issue.');
      return;
    }

    const newReport = {
      id: Date.now().toString(),
      type,
      desc,
      image,
    };

    setHistory([newReport, ...history]);
    Alert.alert('Report Submitted', `Type: ${type}\n\nDescription: ${desc}`);
    setDesc('');
    setType('Phishing');
    setImage(null);
  };

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'We need permission to access your media library.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: [ImagePicker.MediaType.IMAGE], // ✅ Updated usage
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary }]}>Report Cyber Crime</Text>

      <Text style={[styles.label, { color: colors.text }]}>Type:</Text>
      <View style={[styles.pickerWrapper, { backgroundColor: colors.card, borderColor: colors.primary }]}>
        <Picker
          selectedValue={type}
          onValueChange={setType}
          style={[styles.picker, { color: colors.text }]}
        >
          <Picker.Item label="Phishing" value="Phishing" />
          <Picker.Item label="Malware" value="Malware" />
          <Picker.Item label="Hacking" value="Hacking" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <Text style={[styles.label, { color: colors.text }]}>Description:</Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: colors.card,
            borderColor: colors.primary,
            color: colors.text,
          },
        ]}
        placeholder="Explain the issue..."
        placeholderTextColor={colors.text + '88'}
        multiline
        numberOfLines={4}
        value={desc}
        onChangeText={setDesc}
      />

      <TouchableOpacity style={[styles.uploadButton, { borderColor: colors.primary }]} onPress={handlePickImage}>
        <Text style={{ color: colors.primary }}>
          {image ? 'Change Screenshot' : 'Upload Screenshot'}
        </Text>
      </TouchableOpacity>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: '100%', height: 200, marginTop: 10, borderRadius: 10 }}
        />
      )}

      <TouchableOpacity
        style={[styles.button, { borderColor: colors.primary }]}
        onPress={handleSubmit}
      >
        <Text style={[styles.buttonText, { color: colors.primary }]}>Submit Report</Text>
      </TouchableOpacity>

      {history.length > 0 && (
        <>
          <Text style={[styles.historyTitle, { color: colors.text }]}>Report History</Text>
          <FlatList
            data={history}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.reportCard, { backgroundColor: colors.card }]}>
                <Text style={{ color: colors.text, fontWeight: 'bold' }}>Type: {item.type}</Text>
                <Text style={{ color: colors.text }}>Desc: {item.desc}</Text>
                {item.image && (
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: '100%', height: 100, marginTop: 5, borderRadius: 8 }}
                  />
                )}
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    textAlignVertical: 'top',
  },
  pickerWrapper: {
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  uploadButton: {
    marginTop: 15,
    padding: 12,
    borderWidth: 1.5,
    borderRadius: 10,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  historyTitle: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: '600',
  },
  reportCard: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
  },
});
