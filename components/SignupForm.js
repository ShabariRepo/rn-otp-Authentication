import react, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";

class SignupForm extends Component {
    render(){
        <View>
            <FormLabel>Enter Phone Number</FormLabel>
            <FormInput />
            <Button title="Submit" />
        </View>
    }
}

export default SignupForm;