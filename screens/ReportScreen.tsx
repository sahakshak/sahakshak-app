import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import CaseInterface from "../interface/case.interface";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { StyleSheet } from "react-native";
import { emptyCase } from "../utils/emptyCase";
import textInputStyle from "../styles/textInput";
import buttonStyle from "../styles/button";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "ReportScreen">;
}

const ReportScreen = ({ navigation }: NavigationProps) => {
  const [caseData, setCaseData] = useState<CaseInterface>(emptyCase);

  const handleInputChange = (
    field: keyof CaseInterface,
    value: string | number
  ) => {
    setCaseData({
      ...caseData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    navigation.navigate("OtpScreen");

    // try {
    //   const response = await axios.post(
    //     "https://sahakshak-backend.vercel.app/api/cases",
    //     caseData
    //   );

    //   if (response.status === 201) {
    //     navigation.navigate("OtpScreen");
    //   }
    // } catch (error) {
    //   console.error("Error:", error.response);
    // }
  };

  return (
    <ScrollView>
      <TextInput
        mode="outlined"
        label="Title"
        value={caseData.title}
        onChangeText={(value) => handleInputChange("title", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
      />
      <TextInput
        mode="outlined"
        label="Description"
        value={caseData.description}
        onChangeText={(value) => handleInputChange("description", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
      />
      <TextInput
        label="Name"
        mode="outlined"
        value={caseData.name}
        onChangeText={(value) => handleInputChange("name", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
      />
      <TextInput
        mode="outlined"
        label="Age"
        value={String(caseData.age)}
        onChangeText={(value) => handleInputChange("age", parseInt(value))}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        keyboardType="numeric"
      />
      <TextInput
        label="Phone Number"
        mode="outlined"
        value={caseData.phoneNumber}
        onChangeText={(value) => handleInputChange("phoneNumber", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        keyboardType="phone-pad"
      />
      <TextInput
        label="Email"
        mode="outlined"
        value={caseData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        keyboardType="email-address"
      />
      <TextInput
        mode="outlined"
        label="Address"
        value={caseData.address}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        onChangeText={(value) => handleInputChange("address", value)}
      />
      <TextInput
        mode="outlined"
        label="Pin Code"
        value={caseData.pinCode}
        onChangeText={(value) => handleInputChange("pinCode", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        keyboardType="numeric"
      />
      <TextInput
        label="Time of Crime(DD/MM/YYYY)"
        mode="outlined"
        value={caseData.timeOfCrime.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
        onChangeText={(value) => handleInputChange("timeOfCrime", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        keyboardType="numeric"
      />
      <TextInput
        label="Suspect(If Any)"
        mode="outlined"
        value={caseData.suspect}
        onChangeText={(value) => handleInputChange("suspect", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={buttonStyle.buttonStyle}
      >
        Submit
      </Button>
    </ScrollView>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
    marginStart: 12,
    marginEnd: 12,
  },
});
