import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image, TextInput,  } from 'react-native';
import { Header } from './Header'

function Homepage() {
  return (
    <View style={styles.container}>
        <Header />

        <View style={styles.Searchlane}>
        <View style={styles.SearchIconDiv}>
          <Image source={require('../assets/search.png')} style={styles.SearchIcon}/>
        </View>
        <View style={styles.SearchField}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search a job or position"
            placeholderTextColor={'gray'}
            // value={searchQuery}
            // onChangeText={text => setSearchQuery(text)}
          />
        </View>
        <View style='filterdiv'><Image source={require('../assets/filter.png')} style={styles.FilterIcon}/></View>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  profilesection: {
    flexDirection: 'row'
  },

  apple:{
    height: 60,
    width: 60,
  },

  Searchlane: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    paddingHorizontal: 5,
    marginBottom: 5,
    marginLeft: -15,
  },
  searchInput: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    // fontWeight: 'bold',
    paddingHorizontal: 10,
    width: '100%',
  },
  SearchField: {
    flex: 1,
    marginLeft: -5,
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 20,
   
  },
  SearchIcon: {
    
  },

  filterdiv: {
    
  },

  FilterIcon: {
   height: 30,
   width: 40,
  },

  SearchIconDiv: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopRadius: 8,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    paddingLeft: 10,
    paddingRight:8,
    marginLeft: 9,
  },
  VectorView: {
    borderRadius: 15,
    backgroundColor: '#F0522F',
    padding: 10,
    marginLeft: 22,
    marginRight: 19,
  },
});

export default Homepage;