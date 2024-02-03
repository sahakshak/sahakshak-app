import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TextInput, Button, HelperText, Menu } from "react-native-paper";
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
  const [validationErrors, setValidationErrors] = useState<Record<string, boolean>>({});
  const [genderMenuVisible, setGenderMenuVisible] = useState<boolean>(false);

  const handleGenderSelect = (gender: string) => {
    setGenderMenuVisible(false);

    // Update the case data with the selected gender
    handleInputChange("gender", gender);
  };



  const genderOptions = ["Male", "Female", "Other"];

  const handleInputChange = (
    field: keyof CaseInterface,
    value: string | number
  ) => {
    setCaseData({
      ...caseData,
      [field]: value,
    });

    // Clear validation error for the current field when it's being edited
    setValidationErrors({
      ...validationErrors,
      [field]: false,
    });
  };

  const handleSubmit = async () => {
    // Check if required fields are empty
    const requiredFields = ["title", "description", "name", "gender", "age", "phoneNumber", "email", "address", "pinCode"];
    const errors: Record<string, boolean> = {};

    requiredFields.forEach((field) => {
      if (!caseData[field]) {
        errors[field] = true;
      }
    });

    // Update validation errors state
    setValidationErrors(errors);

    // If any required field is empty, stop form submission
    if (Object.values(errors).some((error) => error)) {
      return;
    }

    try {
      const response = await fetch("http://172.105.54.189:4000/api/cases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(caseData),
      });

      if (response.status === 201) {
        navigation.navigate("OtpScreen");
      } else {
        console.error("Error: Unexpected response status", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
      <HelperText type="error" visible={validationErrors["title"]}>
        Title is required
      </HelperText>

      <TextInput
        mode="outlined"
        label="Description"
        value={caseData.description}
        onChangeText={(value) => handleInputChange("description", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
      />
      <HelperText type="error" visible={validationErrors["description"]}>
        Description is required
      </HelperText>

      <TextInput
        label="Name"
        mode="outlined"
        value={caseData.name}
        onChangeText={(value) => handleInputChange("name", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
      />
      <HelperText type="error" visible={validationErrors["name"]}>
        Name is required
      </HelperText>

      <Menu
        visible={genderMenuVisible}
        onDismiss={() => setGenderMenuVisible(false)}
        anchor={
          <Button
            mode="outlined"
            onPress={() => setGenderMenuVisible(true)}
            style={textInputStyle.textInputStyle}
          >
            {caseData.gender || "Select Gender"}
          </Button>
        }
      >
        {genderOptions.map((option) => (
          <Menu.Item key={option} onPress={() => handleGenderSelect(option)} title={option} />
        ))}
      </Menu>
      <HelperText type="error" visible={validationErrors["gender"]}>
        Gender is required
      </HelperText>


      <TextInput
        mode="outlined"
        label="Age"
        value={String(caseData.age)}
        onChangeText={(value) => handleInputChange("age", parseInt(value))}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        keyboardType="numeric"
      />
      <HelperText type="error" visible={validationErrors["age"]}>
        Age is required
      </HelperText>

      <TextInput
        label="Phone Number"
        mode="outlined"
        value={caseData.phoneNumber}
        onChangeText={(value) => handleInputChange("phoneNumber", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        keyboardType="phone-pad"
      />
      <HelperText type="error" visible={validationErrors["phoneNumber"]}>
        Phone Number is required
      </HelperText>

      <TextInput
        label="Email"
        mode="outlined"
        value={caseData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        keyboardType="email-address"
      />
      <HelperText type="error" visible={validationErrors["email"]}>
        Email is required
      </HelperText>

      <TextInput
        mode="outlined"
        label="Address"
        value={caseData.address}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        onChangeText={(value) => handleInputChange("address", value)}
      />
      <HelperText type="error" visible={validationErrors["address"]}>
        Address is required
      </HelperText>

      <TextInput
        mode="outlined"
        label="Pin Code"
        value={caseData.pinCode}
        onChangeText={(value) => handleInputChange("pinCode", value)}
        style={textInputStyle.textInputStyle}
        outlineStyle={textInputStyle.outlineStyle}
        keyboardType="numeric"
      />
      <HelperText type="error" visible={validationErrors["pinCode"]}>
        Pin Code is required
      </HelperText>

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
