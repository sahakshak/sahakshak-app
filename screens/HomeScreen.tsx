import { StyleSheet, View } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Surface, Text, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "HomeScreen">;
}

export default function HomeScreen({ navigation }: NavigationProps) {
  return (
    <Surface style={styles.container}>
      <Text variant="headlineSmall" style={styles.heading}>
        Our Services
      </Text>
      {options.map((item) => (
        <TouchableRipple
          onPress={() => navigation.navigate(item.screenName)}
          key={item.screenName}
          style={styles.optionRippleContainer}
        >
          <View style={styles.optionsContainer}>
            <Text>{item.label}</Text>
            <Icon name="chevron-right" size={20} />
          </View>
        </TouchableRipple>
      ))}
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  optionsContainer: {
    padding: 12,
    paddingStart: 16,
    paddingEnd: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionRippleContainer: {
    margin: 8,
    borderRadius: 12,
    borderColor: "#a3a3a3",
    borderWidth: 1,
  },
  heading: {
    padding: 12,
  },
});

const options = [
  { label: "Create a FIR", screenName: "ReportScreen" as const },
];
