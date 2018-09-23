import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";

class SignupForm extends Component {
    // old syntax
    // constructor(props){
    //     super(props);

    //     this.state = { phone: '' };
    // }
    // es7 2016/17 new syntax
    // same as this.state so you can access this below as well
    state = { phone: '' };

    // handleSubmit(){

    // }
    // above is traditional for the handler but below is new syntax
    // but with above you have to call bind(this) in button
    handleSubmit = () => {

    }

    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput
                        value={ this.state.phone }
                        onChangeText={ phone => this.setState({ phone }) }
                        // above same as phone: phone
                    />
                </View>
                
                <Button onPress={ this.handleSubmit.bind(this) } title="Submit" />
            </View>
        );
    }
}

export default SignupForm;