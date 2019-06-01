import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import Input from '../../components/Input';
import Select from '../../components/Select';
import logo from '../../images/logo.png';
import { rem } from '../../helpers';
import Button from '../../components/Button';

class Profile extends PureComponent {
    render() {
        return (<View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image
                source={logo}
                resizeMode={"contain"}
                style={{
                    width: "90%",
                    height: 90 * rem
                }}
            />
            <Input
                label={"Nombres"}
                icon={"user"}
                // placeholder={""}
                value={"Gustavo"}
            />
            <Input
                label={"Apellidos"}
                icon={"user"}
                value={"Yance"}
            />
            <Select
                value={"24/11/2019"}
                label={"Fecha nacimiento"}
                label={"Fecha nacimiento"}
                isDate
                icon={"birthday-cake"}
            />
            <Button
                text={"Actualizar"}
            />
        </View>)
    }
}

export default Profile;