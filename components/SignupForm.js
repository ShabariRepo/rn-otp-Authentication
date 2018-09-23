import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import axios from 'axios';

// root URL path
// do this if most of the JS file here is going to same URL root or declare them and use backtics to go to function /..
const ROOT_URL = 'https://us-central1-one-time-password-fd380.cloudfunctions.net';

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
    handleSubmit = async () => {
        // now need to make network call to google service
        // can use fetch() function built into react native but it has some weird stuff so guy prefers axios
        // post request to URL
        // second argument is an object to post

        // new syntax async & await
        // to handle a .catch with this syntax wrap with try/catch
        try{
            await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    // above same as phone: phone
                    />
                </View>

                <View style={{ paddingBottom: 10 }}>
                    <Button onPress={this.handleSubmit} title="Submit" />
                </View>
                <Image source={require('../assets/forSale.png')} />
            </View>
        );
    }
}

export default SignupForm;