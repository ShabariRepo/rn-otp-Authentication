import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Avatar, Text } from 'react-native-elements';

const { height } = Dimensions.get('window');

//paddingTop: height * 0.1 // 10 percentage of the screen height

export default class Logo extends Component {
    render() {
        return (
            <View>
                {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                /> */}
                <Avatar
                    xlarge
                    rounded
                    source={require('./forSale.png')}
                    activeOpacity={0.7}
                    ContainerStyle={{ flex: 2, marginTop: height * 0.3 }}
                />
                <Text
                    h1
                    style={{
                        textAlign: 'center', // <-- the magic
                        fontWeight: 'bold',
                        marginTop: 0
                    }}
                >
                    Flutr
                </Text>
            </View>
        )
    }
}

//export default Logo;