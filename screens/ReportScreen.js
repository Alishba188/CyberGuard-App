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

export default function ReportScreen() {
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
      mediaTypes: [ImagePicker.MediaType.IMAGE],
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Cyber Crime</Text>

      <Text style={styles.label}>Type:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={type}
          onValueChange={setType}
          dropdownIconColor="#00f6ff"
          style={styles.picker}
        >
          <Picker.Item label="Phishing" value="Phishing" />
          <Picker.Item label="Malware" value="Malware" />
          <Picker.Item label="Hacking" value="Hacking" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        placeholder="Explain the issue..."
        placeholderTextColor="black"
        multiline
        numberOfLines={4}
        value={desc}
        onChangeText={setDesc}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={handlePickImage}>
        <Text style={{ color: '#00f6ff', fontWeight: '600' }}>
          {image ? 'Change Screenshot' : 'Upload Screenshot'}
        </Text>
      </TouchableOpacity>

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: '100%', height: 200, marginTop: 10, borderRadius: 12 }}
        />
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Report</Text>
      </TouchableOpacity>

      {history.length > 0 && (
        <>
          <Text style={styles.historyTitle}>Report History</Text>
          <FlatList
            data={history}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.reportCard}>
                <Text style={styles.reportText}>
                  <Text style={{ fontWeight: 'bold', color: '#00f6ff' }}>Type:</Text> {item.type}
                </Text>
                <Text style={styles.reportText}>Desc: {item.desc}</Text>
                {item.image && (
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: '100%',
                      height: 100,
                      marginTop: 6,
                      borderRadius: 10,
                    }}
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
    backgroundColor: '#012d3a',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 16,
    color: '#cccccc',
  },
  input: {
    backgroundColor: '#f0f4f8',
    borderColor: '#00f6ff',
    borderWidth: 1.5,
    padding: 14,
    borderRadius: 12,
    color: '#000',
    textAlignVertical: 'top',
  },
  pickerWrapper: {
    backgroundColor: '#f0f4f8',
    borderColor: '#00f6ff',
    borderWidth: 1.5,
    borderRadius: 12,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#000',
  },
  uploadButton: {
    marginTop: 15,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#00f6ff',
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#1f2d3d',
  },
  submitButton: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#1f2d3d',
    shadowColor: '#00f6ff',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
  },
  historyTitle: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  reportCard: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#1a2e3b',
    marginBottom: 10,
  },
  reportText: {
    color: '#cccccc',
    marginBottom: 4,
  },
});
