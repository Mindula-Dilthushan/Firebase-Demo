import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View>
                <Text> Firebase Demo App </Text>
                <TextInput
                    mode="outlined"
                    label="User Name"
                    placeholder="Type your name"
                    right={<TextInput.Affix text="/100" />}
                />
            </View>
        );
    }

}
