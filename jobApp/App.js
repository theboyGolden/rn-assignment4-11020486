import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import Homepage from './components/Homepage';
import JobCard from './components/JobCard';
import FeaturedJobCard from './components/featuredJobCard';

export default function App() {
  const featuredJobs = [
    { id: 1, jobTitle: 'Software Engineer', company: 'Facebook', location: 'Accra, Ghana', image: require('./assets/facebook.png') },
    { id: 2, jobTitle: 'Data Analyst', company: 'BlueCo', location: 'Accra, Ghana', image: require('./assets/google.png') },
    { id: 3, jobTitle: 'UI/UX Designer', company: 'Instagram', location: 'Seattle, USA', image: require('./assets/instagram.png') },
    { id: 4, jobTitle: 'Cybersecurity Expert', company: 'Facebook', location: 'Accra, Ghana', image: require('./assets/twitter.png') },
    { id: 5, jobTitle: 'Game developer', company: 'Unity', location: 'Accra, Ghana', image: require('./assets/unity.png') },
    { id: 6, jobTitle: 'Virtual Reality Engineer', company: 'MagicLeap', location: 'Accra, Ghana', image: require('./assets/virtual-reality.png') },
    { id: 7, jobTitle: 'Machine Learning Expert', company: 'Amazon Web Services', location: 'Accra, Ghana', image: require('./assets/machine_learning.png') },
    { id: 8, jobTitle: 'Systems Administrator', company: 'Veritone', location: 'Accra, Ghana', image: require('./assets/administrator.png') },
  ];

  const popularJobs = [
    { id: 1, jobTitle: 'Senior Developer', company: 'Tech Co.', location: 'New York', image: require('./assets/facebook.png')  },
    { id: 2, jobTitle: 'Senior Developer', company: 'Tech Co.', location: 'New York', image: require('./assets/apple.png') },
    { id: 3, jobTitle: 'Senior Developer', company: 'Tech Co.', location: 'New York', image: require('./assets/instagram.png') },
    { id: 4, jobTitle: 'Senior Developer', company: 'Tech Co.', location: 'New York', image: require('./assets/unity.png') },
    { id: 5, jobTitle: 'Senior Developer', company: 'Tech Co.', location: 'New York', image: require('./assets/virtual-reality.png') },
    { id: 6, jobTitle: 'Senior Developer', company: 'Tech Co.', location: 'New York', image: require('./assets/machine_learning.png') },
    { id: 7, jobTitle: 'Senior Developer', company: 'Tech Co.', location: 'New York', image: require('./assets/twitter.png') },
    { id: 8, jobTitle: 'Senior Developer', company: 'Tech Co.', location: 'New York', image: require('./assets/administrator.png') },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Homepage />
          <View style={styles.cardHeader}>
            <Text style={styles.text1}>Featured Jobs</Text>
            <Text style={styles.text2}>See all</Text>
          </View>
          <FeaturedJobCard jobs={featuredJobs} />
          <View style={styles.cardHeader}>
            <Text style={styles.text1}>Popular Jobs</Text>
            <Text style={styles.text2}>See all</Text>
          </View>
          {popularJobs.map((job) => (
            <JobCard
              key={job.id}
              jobTitle={job.jobTitle}
              company={job.company}
              location={job.location}
              image={job.image}
            />
          ))}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFD',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    color: '#9999A1',
  },
  scrollView: {
    flex: 1,
  },
  horizontalScroll: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
