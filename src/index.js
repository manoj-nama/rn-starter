import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Users from './users/users.screen';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Users />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
