import { View, StyleSheet } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Surface, TextInput, Text, Button } from "react-native-paper";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "OtpScreen">;
}

export default function OtpScreen({ navigation }: NavigationProps) {
  return (
    <Surface style={styles.container}>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        outlineStyle={styles.textInputOutline}
        keyboardType="numeric"
        maxLength={4}
        selectionColor="#4a4a4a"
      />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "transparent",
    textAlign: "center",
    width: 100,
    marginTop: 200,
  },
  textInputOutline: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    borderColor: "#231212",
  },
});
