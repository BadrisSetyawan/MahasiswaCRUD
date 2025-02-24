import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type MahasiswaData = {
  id: number;
  nim: number;
  nama: string;
  jurusan: string;
  angkatan: number;
  createdAt: string;
  updatedAt: string;
};

interface MahasiswaCardProps {
  item: MahasiswaData;
  onPress: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function MahasiswaCard({
  item,
  onPress,
  onEdit,
  onDelete,
}: MahasiswaCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.cardHeader}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {item.nama
              .split(' ')
              .map((n: string) => n[0])
              .join('')}
          </Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.name} numberOfLines={2}>
            {item.nama}
          </Text>
          <Text style={styles.nim}>NIM: {item.nim}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.iconButton} onPress={onEdit}>
            <Icon name="edit" size={24} color="#6C63FF" />
          </Pressable>
          <Pressable
            style={[styles.iconButton, styles.deleteButton]}
            onPress={onDelete}>
            <Icon name="trash" size={24} color="#FF6B6B" />
          </Pressable>
        </View>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.infoRow}>
          <Icon name="vcard" size={20} color="#6C63FF" />
          <Text style={styles.info}>{item.jurusan}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="rss" size={20} color="#6C63FF" />
          <Text style={styles.info}>Angkatan {item.angkatan}</Text>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.date}>
          Dibuat: {new Date(item.createdAt).toLocaleDateString()}
        </Text>
        <Text style={styles.date}>
          Diperbarui: {new Date(item.updatedAt).toLocaleDateString()}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerInfo: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    flexWrap: 'wrap',
  },
  nim: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  cardContent: {
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  info: {
    fontSize: 14,
    color: '#444',
    marginLeft: 10,
  },
  cardFooter: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    padding: 12,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: '#FFE5E5',
  },
});
