import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor='#11a5a4'/>
    <DrawerNavigator />
    </>
  );
}

