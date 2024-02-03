import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";

interface ThanksScreenProps {

}

const ThanksScreen: React.FC<ThanksScreenProps> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Thanks for voting!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    button: {
        marginTop: 20,
    },
});

export default ThanksScreen;
