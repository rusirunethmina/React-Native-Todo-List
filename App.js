import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Task from "./components/Task";

const HomeScreen = () => {
  return (
    <View style={styles.container} >
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
           <View style={styles.items}>
              <Task  text={'Task 1'}/>
              <Task text={'Task 2'}/>
           </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  items: {
    marginTop: 20,
  },


});

export default HomeScreen;
