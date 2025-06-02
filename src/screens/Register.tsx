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
} from 'react-native';
import {RootStackParamList} from '../types/navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';
type RegisterProps = StackNavigationProp<RootStackParamList, 'Register'>;

type Props = {
  navigation: RegisterProps;
};

export default function Register({navigation}: Props) {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async () => {};

  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView
        contentContainerStyle={styles.mainContainer}
        style={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.mainHeader}>Register</Text>
          <Text style={styles.subHeader}>
            Welcome. We're waiting for your presence.
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
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry
            value={formData.confirmPassword}
            onChangeText={text => handleInputChange('confirmPassword', text)}
          />
        </View>
        <Pressable onPress={handleSubmit}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.loginButtonContainer}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginTextContainer}>
            Already have an account?{' '}
            <Text style={styles.loginText}>Sign in</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
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
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
    fontWeight: 'bold',
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
  buttonContainer: {
    backgroundColor: '#8F87F1',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButtonContainer: {
    marginTop: 20,
  },
  loginTextContainer: {textAlign: 'center', color: 'gray'},
  loginText: {color: '#8F87F1'},
});
