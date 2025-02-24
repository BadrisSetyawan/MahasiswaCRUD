import {RouteProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import {RootStackParamList} from '../types/navigationTypes';
import axios from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';
import Config from 'react-native-config';

type EditMahasiwaRouteProp = RouteProp<RootStackParamList, 'EditMahasiswa'>;

type EditMahasiswaNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EditMahasiswa'
>;

interface EditMahasiswaProps {
  route: EditMahasiwaRouteProp;
  navigation: EditMahasiswaNavigationProp;
}

export default function EditMahasiswa({route, navigation}: EditMahasiswaProps) {
  const {item} = route.params;
  const [formData, setFormData] = useState({
    nama: item.nama,
    nimBaru: item.nim.toString(),
    jurusan: item.jurusan,
    angkatan: item.angkatan.toString(),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <>
      <StatusBar backgroundColor="#6C63FF" barStyle="light-content" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Edit Mahasiswa</Text>
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
              value={formData.nimBaru.toString()}
              onChangeText={text => setFormData({...formData, nimBaru: text})}
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

          <Pressable style={styles.button} onPress={handleSubmit}>
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
