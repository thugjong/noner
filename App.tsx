import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ChapterScreen from './src/screens/ChapterScreen';
import ThemeScreen from './src/screens/ThemeScreen';
import SearchScreen from './src/screens/SearchScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="홈" component={HomeScreen} />
      <Stack.Screen name="Chapter" component={ChapterScreen} options={{ title: '장별 보기' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="홈" component={HomeStack} />
        <Tab.Screen name="주제별" component={ThemeScreen} />
        <Tab.Screen name="검색" component={SearchScreen} />
        <Tab.Screen name="즐겨찾기" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 