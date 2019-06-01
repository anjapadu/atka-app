import React, { PureComponent } from 'react';
import {
    Image,
} from 'react-native';
import Text from '../../components/Text';
import { connect } from 'react-redux';
import Input from '../../components/Input';
import logo from '../../images/logo.png'
import Button from '../../components/Button';
import Content from '../../components/Content';
import { rem } from '../../helpers';
class Login extends PureComponent {
    _onSubmit() {
        this.props.navigation.navigate("Home")
    }

    render() {
        return (<Content>
            <Image
                source={logo}
                resizeMode={"contain"}
                style={{
                    width: '90%',
                    height: 100 * rem
                }}
            />
            <Input
                label={"Usuario"}
                icon={"user"}
                placeholder={"Ingresa usuario"}
            />
            <Input
                icon={"lock"}
                label={"Contraseña"}
                placeholder={"Ingresa contraseña"}
                
            />
            <Button
                onPress={this._onSubmit.bind(this)}
                text={"Ingresar"}
            />
        </Content>)
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {
})(Login);