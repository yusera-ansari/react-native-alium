import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  triggerWithParams,
  SurveyParametersBuilder,
  stop,
} from 'react-native-alium';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Home = ({ navigation }) => {
  React.useEffect(() => {
    let timeout = setTimeout(() => {
      console.log('settimeout executing....');
      // navigation.navigate('Dashboard');
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      console.log('Homescreen....');
      let params = new SurveyParametersBuilder('home')
        .addDim(1, 'alium')
        .addDim(2, '')
        .addDim(3, '9029')
        .addCustom('name', 'aluim')
        .build();
      triggerWithParams(params);

      return () => {
        stop('home');
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
        }}
        onPress={() => navigation.navigate('Dashboard')}
      >
        Go to dashboard
      </Text>
    </View>
  );
};
export default Home;
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
