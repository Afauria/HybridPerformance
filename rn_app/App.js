/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const DetailScreen = ({route}) => {
  //页面跳转参数
  const {index} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen {index}</Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push(i);
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <View
        style={{
          height: 48,
          alignItems: 'center',
          backgroundColor: '#4a9df8',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('./assets/direction-left.png')}
          style={{width: 24, height: 24, tintColor: '#FFF'}}
        />
        <Text style={{fontSize: 24, color: '#FFF'}}>标题栏</Text>
        <View style={{width: 24, height: 24}} />
      </View> */}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detail', {index: item})}>
            <Text>{item}</Text>
            <Image
              source={require('./assets/arrow-right.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={{backgroundColor: '#cccccc', height: 1}} />
        )}
      />
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '标题栏',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#4a9df8',
              height: 48,
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerStyle: {
              backgroundColor: '#4a9df8',
              height: 48,
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  item: {
    padding: 8,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
