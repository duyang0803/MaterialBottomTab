import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

export default function Splash() {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  view: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});