import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Surface, Text, TouchableRipple, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "HomeScreen">;
}

export default function HomeScreen({ navigation }: NavigationProps) {

  const handlePress = async () => {
    navigation.navigate('VotesScreen');
  }
  return (
    <Surface style={styles.container}>
      <Text variant="headlineSmall" style={styles.heading}>
        Our Services
      </Text>
      {options.map((item) => (
        <TouchableRipple
          key={item.screenName}
          onPress={() => navigation.navigate(item.screenName)}
          style={styles.optionRippleContainer}
        >
          <View style={styles.optionsContainer}>
            <Text>{item.label}</Text>
            <Icon name="chevron-right" size={20} />
          </View>
        </TouchableRipple>
      ))}
      <Button
        mode="contained"
        onPress={handlePress}
        style={styles.votesButton}
      >
        Votes
      </Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionsContainer: {
    padding: 12,
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
  votesButton: {
    margin: 16,
    borderRadius: 12,
    backgroundColor: "#000",
  },
});

const options = [
  { label: "Create a FIR", screenName: "ReportScreen" as const },
];
