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
    state = {
        email: '',
        errorEmail: false,
        errorPassword: false,
        password: '',
        isLoading: false
    }
    _onSubmit() {
        this.setState({
            errorEmail: false,
            errorPassword: false,
        })
        if (this.state.email.trim().length == 0) {
            return this.setState({
                errorEmail: 'Debes ingresar un email'
            })
        }
        if (this.state.password.trim().length < 6) {
            return this.setState({
                errorPassword: 'Debes ingresar tu password. (Min 6 chars)'
            })
        }

        this.setState({
            isLoading: true
        }, () => {
            setTimeout(() => {
                this.props.navigation.navigate("Home")
            }, 1500);
        })
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
                value={this.state.email}
                label={"Usuario"}
                error={this.state.errorEmail}
                icon={"user"}
                placeholder={"Ingresa usuario"}
                onChangeText={text => this.setState({
                    email: text
                })}
            />
            <Input
                isPassword
                error={this.state.errorPassword}
                icon={"lock"}
                label={"Contraseña"}
                onChangeText={text => this.setState({
                    password: text
                })}
                value={this.state.password}
                placeholder={"Ingresa contraseña"}

            />
            <Button
                isLoading={this.state.isLoading}
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