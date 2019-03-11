import React from 'react';
import { StyleSheet, ActivityIndicator, FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchUsers } from './user.actions';

class Users extends React.Component {

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  keyExtractor = (item) => item.id.toString()

  renderItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    )
  }

  render() {
    const { users, loading } = this.props;
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#fc0" />
        </View>
      )
    }
    return (
      <FlatList
        data={users}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignSelf: 'stretch',
  },
  name: {
    fontSize: 18,
    paddingVertical: 5,
    fontWeight: '600',
  },
});

const mapStateToProps = ({ users }) => ({
  users: users.list,
  loading: users.loading
});

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

