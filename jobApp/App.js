import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import Homepage from './components/Homepage';
import JobCard from './components/JobCard';
import FeaturedJobCard from './components/featuredJobCard';


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style ='scrollView'>
          <View style={styles.container}>
            <Homepage />
            <View style={styles.cardHeader}>
                <Text style={styles.text1}>Featured Jobs</Text>
                <Text style={styles.text2}>See all</Text>
            </View>
            <FeaturedJobCard jobTitle='Software Engineer' company='Facebook' location='Accra, Ghana'/>
            <View style={styles.cardHeader}>
                <Text style={styles.text1}>Popular Jobs</Text>
                <Text style={styles.text2}>See all</Text>
            </View>
            <JobCard jobTitle="Senior Developer" company="Tech Co." location="New York" />
            <JobCard jobTitle="Senior Developer" company="Tech Co." location="New York" />
            <JobCard jobTitle="Senior Developer" company="Tech Co." location="New York" />
            <JobCard jobTitle="Senior Developer" company="Tech Co." location="New York" />
            <JobCard jobTitle="Senior Developer" company="Tech Co." location="New York" />
            <JobCard jobTitle="Senior Developer" company="Tech Co." location="New York" />
            <JobCard jobTitle="Senior Developer" company="Tech Co." location="New York" />
            <JobCard jobTitle="Senior Developer" company="Tech Co." location="New York" />
            <StatusBar style="auto" />
          </View>
      </ScrollView>
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  cardHeader: {
    flexDirection: 'row',
},

text1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 100

},

text2: {
  fontSize: 16,
  color: '#9999A1',
  marginLeft: 85

},

  scrollView: {
    flex: 1,
  }
});
