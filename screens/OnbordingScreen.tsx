import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput, Surface, Button } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
//import { useSignUp } from "@clerk/clerk-expo";
import textInputStyle from "../styles/textInput";
import buttonStyle from "../styles/button";
import { SafeAreaView } from "react-native";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "OnboardingScreen">;
}

export default function OnbordingScreen({ navigation }: NavigationProps) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  const handlePress = async () => {
    navigation.navigate("HomeScreen");
    // if (!isLoaded) {
    //   return;
    // }

    // try {
    //   const data = await signUp.create({
    //     firstName,
    //     lastName,
    //     emailAddress,
    //     password,
    //   });

    //   console.log(data);
    // } catch (err: any) {
    //   console.error(JSON.stringify(err, null, 2));
    // }
  };

  return (
    <Surface style={styles.container}>
      <TextInput
        mode="outlined"
        label="Enter First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
      />
      <TextInput
        mode="outlined"
        label="Enter Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
      />
      <TextInput
        mode="outlined"
        label="Enter Email"
        value={emailAddress}
        onChangeText={(text) => setEmailAddress(text)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
      />
      <TextInput
        mode="outlined"
        label="Enter Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        secureTextEntry
      />
      <Button
        onPress={handlePress}
        mode="contained"
        style={buttonStyle.buttonStyle}
      >
        Submit
      </Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
