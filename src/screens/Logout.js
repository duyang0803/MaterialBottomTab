import * as React from 'react';
import {SafeAreaView, View, Button, StyleSheet} from 'react-native';
import {AuthContext} from './AuC';

export default function Logout() {
  const {signOut} = React.useContext(AuthContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Logout"
            onPress={() => signOut()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  button: {},
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 120,
    height: 40,
    marginBottom: '10%',
  },
});