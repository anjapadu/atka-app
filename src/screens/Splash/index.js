import React, { Component } from 'react';
import {
    View,
    PermissionsAndroid
} from 'react-native';
import { connect } from 'react-redux';
import FullScreenLoader from '../../components/FullScreenLoader';
import { isLoggedSelector } from '../../selectors';
import { getParams } from '../../actions'
class Splash extends Component {
    async  requirePositionPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Cool dog app application',
                    message: 'Dame permiso',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);

                this.setState({ location });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );


        this.requirePositionPermission();
        setTimeout(() => {
            this._validateLogged();
        }, 2500);
    }
    _validateLogged() {
        if (this.props.isLogged) {
            return this.props.navigation.navigate('App')
        }
        return this.props.navigation.navigate('Auth')
    }
    render() {

        return (<FullScreenLoader
        />)
    }
}

const mapStateToProps = (state) => {
    const {
        isLogged
    } = isLoggedSelector(state)

    return {
        isLogged
    }
}

export default connect(mapStateToProps, {
    getParams
})(Splash);