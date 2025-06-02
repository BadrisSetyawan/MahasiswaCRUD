import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import {RootStackParamList} from '../types/navigationTypes';
import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

type LoginProps = {
  navigation: NavigationProps;
};

export default function Login({navigation}: LoginProps) {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });
  const [isChecking, setIsChecking] = React.useState(false);

  const verifyToken = async (token: string) => {};

  const checkExistingToken = React.useCallback(async () => {}, []);

  // Check for existing token when component mounts
  React.useEffect(() => {
    checkExistingToken();
  }, [checkExistingToken]);

  const handleInputChange = (name: string, value: string) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async () => {};

  if (isChecking) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#8F87F1" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView
        contentContainerStyle={styles.mainContainer}
        style={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.mainHeader}>Sign in</Text>
          <Text style={styles.subHeader}>
            Welcome back. You've been missed so much.
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={formData.username}
            onChangeText={text => handleInputChange('username', text)}
          />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={formData.password}
            onChangeText={text => handleInputChange('password', text)}
          />
        </View>
        <Pressable onPress={handleSubmit}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign in</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.registerButtonContainer}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerButtonText}>
            Don't have an account?{' '}
            <Text style={styles.registerText}>Register</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
  },
  mainContainer: {
    padding: 20,
    marginTop: 100,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  subHeader: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '500',
    marginBottom: 20,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    borderRadius: 7,
    paddingHorizontal: 15,
    color: 'black',
  },
  inputLabel: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#8F87F1',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {color: 'white', fontWeight: '400'},
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingText: {
    marginTop: 10,
    color: 'gray',
    fontSize: 16,
  },
  registerButtonContainer: {marginTop: 20},
  registerButtonText: {textAlign: 'center', color: 'gray'},
  registerText: {color: '#8F87F1'},
});
