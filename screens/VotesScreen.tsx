import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Surface, Text, TouchableRipple } from "react-native-paper";
import ThanksScreen from "./ThanksScreen";

interface NavigationProps {
    navigation: NativeStackNavigationProp<RootStackParamList, "VotesScreen">;
}

const VoteScreen: React.FC<NavigationProps> = ({ navigation }) => {
    const [showThanksScreen, setShowThanksScreen] = useState(false);

    const handleOptionSelected = (option: string) => {
        console.log(`Option selected: ${option}`);
        setShowThanksScreen(true);
    };

    if (showThanksScreen) {
        return <ThanksScreen />;
    }

    return (
        <Surface style={styles.container}>
            <Text style={styles.text}>
                Will there be a riot?
            </Text>
            <TouchableRipple
                style={styles.optionContainer}
                onPress={() => handleOptionSelected("Yes")}
            >
                <View>
                    <Text style={styles.optionText}>Yes</Text>
                </View>
            </TouchableRipple>
            <TouchableRipple
                style={styles.optionContainer}
                onPress={() => handleOptionSelected("No")}
            >
                <View>
                    <Text style={styles.optionText}>No</Text>
                </View>
            </TouchableRipple>
        </Surface>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 16,
    },
    text: {
        marginTop: 10,
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
    },
    optionContainer: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#a3a3a3",
        marginVertical: 8,
        width: 200,
        alignItems: "center",
    },
    optionText: {
        fontSize: 16,
    },
});

export default VoteScreen;
