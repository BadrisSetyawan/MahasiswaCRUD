import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
  Pressable,
  Alert,
} from 'react-native';
import {RootStackParamList} from '../types/navigationTypes';
import Config from 'react-native-config';
type CreateMahasiswaNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CreateMahasiswa'
>;

type CreateMahasiswaProps = {
  navigation: CreateMahasiswaNavigationProp;
};

export default function CreateMahasiswa({navigation}: CreateMahasiswaProps) {
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    jurusan: '',
    angkatan: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {};

  return (
    <>
      <StatusBar backgroundColor="#6C63FF" barStyle="light-content" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tambah Mahasiswa</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan nama lengkap"
              value={formData.nama}
              onChangeText={text => setFormData({...formData, nama: text})}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>NIM</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan NIM"
              value={formData.nim.toString()}
              onChangeText={text => setFormData({...formData, nim: text})}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Jurusan</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan jurusan"
              value={formData.jurusan}
              onChangeText={text => setFormData({...formData, jurusan: text})}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Angkatan</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan tahun angkatan"
              value={formData.angkatan.toString()}
              onChangeText={text => setFormData({...formData, angkatan: text})}
              keyboardType="numeric"
            />
          </View>

          <Pressable
            style={styles.button}
            onPress={handleSubmit}
            disabled={isLoading}>
            <Text style={styles.buttonText}>
              {isLoading ? 'Menyimpan...' : 'Simpan Data'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  header: {
    backgroundColor: '#6C63FF',
    padding: 20,
    paddingTop: 80,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  form: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E4E6E8',
  },
  button: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
