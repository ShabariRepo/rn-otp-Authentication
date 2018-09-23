import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import axios from 'axios';

// root URL path
// do this if most of the JS file here is going to same URL root or declare them and use backtics to go to function /..
const ROOT_URL = 'https://us-central1-one-time-password-fd380.cloudfunctions.net';

class SignInForm extends Component {
    state = { phone: '', code: '' };

    handleSubmit = async () => {
        try{
            await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
                phone: this.state.phone, code: this.state.code
            });
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#ddd3ee', marginHorizontal: 10 }}>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>

                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                    // above same as phone: phone
                    />
                </View>
                <View style={{ paddingBottom: 10 }}>
                    <Button onPress={this.handleSubmit} title="Submit" />
                </View>
            </View>
        );
    }
}

export default SignInForm;