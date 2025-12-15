import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { SurveyParametersBuilder, triggerWithParams } from 'react-native-alium';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Dashboard = ({ navigation }) => {
  React.useEffect(() => {
    let params = new SurveyParametersBuilder('item-details')
      .addDim(1, 'alium')
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
        onPress={() => navigation.navigate('Test')}
      >
        Go to Test Screen !!
      </Text>
    </View>
  );
};

export default Dashboard;
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
