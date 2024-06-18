// Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.columnContainer}>
      <View style={styles.column1}>
        <Text style={styles.username}>GoldenBoy</Text>
        <Text style={styles.email}>theboygolden@gmail.com</Text>
      </View>
      <View style={styles.column2}>
        <Text> </Text>
      </View>
      <View style={styles.column3}>
        <Text>
          <Image source={require('../assets/profile.jpg')} style={styles.user} />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  username: {
    fontSize: 30,
    fontFamily: 'Lato',
    fontWeight: '700',
    color: '#000',
  },

  email: {
    color: 'gray'
  },
  column1: {
    flex: 4,
  },
  column2: {
    flex: 2,
  },
  column3: {
    flex: 1,
  },
  user: {
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 50,
    width: 50
  },
});


