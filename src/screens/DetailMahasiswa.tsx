import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigationTypes';

type DetailMahasiswaRouteProp = RouteProp<
  RootStackParamList,
  'DetailMahasiswa'
>;

interface DetailMahasiswaProps {
  route: DetailMahasiswaRouteProp;
}

export default function DetailMahasiswa({route}: DetailMahasiswaProps) {
  const {item} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Detail Mahasiswa</Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>NIM</Text>
            <Text style={styles.value}>{item.nim}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Nama</Text>
            <Text style={styles.value}>{item.nama}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Jurusan</Text>
            <Text style={styles.value}>{item.jurusan}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Angkatan</Text>
            <Text style={styles.value}>{item.angkatan}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Terdaftar</Text>
            <Text style={styles.value}>{item.createdAt}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
});
