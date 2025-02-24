import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Pressable,
  Alert,
} from 'react-native';
import MahasiswaCard from '../components/MahasiswaCard';
import {RootStackParamList} from '../types/navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import Config from 'react-native-config';
type DashboardNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

type DataMahasiswa = {
  id: number;
  nim: number;
  nama: string;
  jurusan: string;
  angkatan: number;
  createdAt: string;
  updatedAt: string;
};

interface DashboardProps {
  navigation: DashboardNavigationProp;
}

export default function Dashboard({navigation}: DashboardProps) {
  const dataMahasiswa = [
    {
      id: 1,
      nim: 1215002,
      nama: 'Emily Johnson',
      jurusan: 'Teknik Informatika',
      angkatan: 2015,
      createdAt: '2015-01-01',
      updatedAt: '2015-01-01',
    },
    {
      id: 2,
      nim: 1215003,
      nama: 'Michael Brown',
      jurusan: 'Teknik Informatika',
      angkatan: 2015,
      createdAt: '2015-01-01',
      updatedAt: '2015-01-01',
    },
  ];

  const isFocused = useIsFocused();

  const fetchMahasiswa = async () => {};

  const handleDelete = async (nim: number) => {
    Alert.alert(
      'Hapus Mahasiswa',
      'Apakah anda yakin ingin menghapus data ini?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          onPress: () => {},
        },
      ],
    );
  };

  useEffect(() => {
    if (isFocused) {
      fetchMahasiswa();
    }
  }, [isFocused]);

  return (
    <>
      <StatusBar backgroundColor="#6C63FF" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Daftar Mahasiswa</Text>
      </View>
      <FlatList
        data={dataMahasiswa}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <MahasiswaCard
            item={item}
            onPress={() => {
              navigation.navigate('DetailMahasiswa', {
                item: item,
              });
            }}
            onEdit={() => {
              navigation.navigate('EditMahasiswa', {
                item: item,
              });
            }}
            onDelete={() => {
              handleDelete(item.nim);
            }}
          />
        )}
      />
      <Pressable
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('CreateMahasiswa');
        }}>
        <Text style={styles.addButtonText}>Tambah Mahasiswa</Text>
      </Pressable>
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
    paddingTop: 20,
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
  addButton: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 60,
  },
  addButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
