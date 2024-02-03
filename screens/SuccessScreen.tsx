import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

interface NavigationProps {
    navigation: NativeStackNavigationProp<RootStackParamList, "SuccessScreen">;
}

const SuccessScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.successText}>Case Registered Successfully</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    successText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
    },
});

export default SuccessScreen;
