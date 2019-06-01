import React, { PureComponent } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Input from '../../components/Input';


class Profile extends PureComponent {
    render() {
        return (<View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Input
                label={"Nombres"}
                icon={"user"}
            />
            <Input
                label={"Apellidos"}
                icon={"user"}
            />
        </View>)
    }
}

export default Profile;