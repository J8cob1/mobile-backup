import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type Props = StackScreenProps<RootStackParamList>;

export default function Home({ navigation, route }: Props) {
  return (
    <Text>
      Home Screen
    </Text>
  );
}
