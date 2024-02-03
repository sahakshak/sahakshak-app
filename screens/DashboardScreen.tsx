import { View, Text } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "DashboardScreen">;
}

export default function DashboardScreen({ navigation }: NavigationProps) {
  return (
    <View>
      <Text>DashboardScreen</Text>
    </View>
  );
}
