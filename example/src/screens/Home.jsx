import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { triggerWithParams, SurveyParametersBuilder } from 'react-native-alium';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Home = ({ navigation }) => {
  React.useEffect(() => {
    console.log('Homescreen...');
    let params = new SurveyParametersBuilder('home')
      .addDim(1, 'yusera')
      .addDim(2, '')
      .addDim(3, '9029')
      .addCustom('name', 'aluim')
      .build();
    triggerWithParams(params);
  }, []);
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
