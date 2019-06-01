import React, { Component } from 'react';
import {
    View,
    PermissionsAndroid
} from 'react-native';
import { connect } from 'react-redux';
import FullScreenLoader from '../../components/FullScreenLoader';
import { isLoggedSelector, positionSelector } from '../../selectors';
import {
    setUserReducer
} from '../../actions'
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
                console.log('You can use the position');
            } else {
                console.log('Error with the position');
            }
            const granted2 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                {
                    title: 'Cool dog app application',
                    message: 'Dame permiso',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted2 === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the position 2');
            } else {
                console.log('Error with the position 2');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    async componentDidMount() {



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
        isLogged,
    } = isLoggedSelector(state)

    return {
        isLogged,
        position: positionSelector(state)
    }
}

export default connect(mapStateToProps, {
    setUserReducer
})(Splash);