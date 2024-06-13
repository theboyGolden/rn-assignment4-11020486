import React from 'react';
import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function LoginComponent() {
  const [text, onChangeText] = React.useState(null);
  const [String, onChangeString] = React.useState(null);

  const handleSubmit = () => {
    console.log('Welcome Back');
  };

  return (
    <View style={styles.container}>
      <View style={styles.Usernamediv}>
        <Text style={styles.Usernametext}>Golden_Boy </Text>
      </View>

      <View style={styles.greetingbox}>
        <View style={styles.greeting}>
          <Text style={styles.welcomeBack}>Welcome Back👋</Text>
        </View>
        <View style={styles.leadmessage}>
          <Text style={styles.leadmessagetext}>Let's login. Apply to Jobs!</Text>
        </View>
      </View>

      <View style={styles.loginForm}>
        <TextInput
          style={styles.nameInputBox}
          onChangeText={onChangeText}
          value={text}
          placeholder='Name'
        />
        <TextInput
          style={styles.emailInputBox}
          onChangeText={onChangeString} // Fix: Correct prop name from 'onChangeString' to 'onChangeText'
          value={String}
          placeholder='Email'
        />

        <TouchableOpacity
          style={styles.logInButton}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.otherOptions}>
        <Text style={styles.orContinueWith}>
          ───────    Or continue with   ───────
        </Text>
      </View>

      <View style={styles.social}>
        <View><Image source={require('../assets/apple.png')} style={styles.user} /></View>
        <View><Image source={require('../assets/Google.png')} style={styles.user} /></View>
        <View><Image source={require('../assets/facebook.png')} style={styles.user} /></View>
      </View>

      <View style={styles.accountIssues}>
        <Text style={styles.noAccount}>Haven't an account? </Text>
        <Text style={styles.register}>Register</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
    margin: 20,
  },

  Usernamediv: {
    marginBottom: 10,
  },

  Usernametext: {
    color: '#356899',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
  },

  welcomeBack: {
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: '600',
    marginBottom: 10,
  },

  leadmessage: {
    marginBottom: 60,
  },

  leadmessagetext: {
    color: 'gray'
  },

  nameInputBox: {
    borderWidth: 1.2,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    width: 325,
  },

  emailInputBox: {
    borderWidth: 1.2,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 40,
    width: 325,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10
  },

  logInButton: {
    backgroundColor: '#356899',
    marginBottom: 80,
    paddingTop: 19,
    paddingBottom: 19,
    borderWidth: 1.2,
    borderColor: '#356899',
    borderRadius: 5,
    fontWeight: '400'
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center'
  },

  orContinueWith: {
    color: 'gray'
  },

  social: {
    flexDirection: 'row',
    columnGap: 50,
    alignItems: 'center',
    marginLeft: 85,
    marginTop: 50,
    marginBottom: 80,
  },

  accountIssues: {
    flexDirection: 'row',
    marginLeft: 70,
  },

  register: {
    color: '#356899',
    fontWeight: '600',
    fontSize: 16,
  },

  noAccount: {
    color: 'gray',
    fontWeight: '300',
    fontSize: 16,
  }
});
