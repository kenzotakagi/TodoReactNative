import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, ScrollView } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filter}>
          <Text>Fileterがここに配置されます</Text>
        </View>
        <ScrollView style={styles.todolist}>
          <Text>TodoListがここに配置されます</Text>
        </ScrollView>
        <View style={styles.input}>
          <Text>テキスト入力がここに配置されます</Text>
        </View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: STATUSBAR_HEIGHT,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  filter: {
    height: 30,
  },
  todolist: {
    flex: 1,
  },
  input: {
    height: 30,
  },
});
