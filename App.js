import React, {Component} from 'react';
import { View, Text } from 'react-native';
import SignUp from './src/signup-page/screens/SignUp';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <View>
                <SignUp/>
            </View>
        );
    }

}
