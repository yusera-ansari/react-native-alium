import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { configure, trigger } from 'react-native-alium';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Test = ({ navigation }) => {
  React.useEffect(() => {
    trigger('home');
  }, []);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
        }}
      >
        Test Scree
      </Text>
    </View>
  );
};
export default Test;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
