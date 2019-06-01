import React from 'react';
import {
    Image
} from 'react-native';
import logo from '../../images/logo.png';
import { rem } from '../../helpers';

export default () => {
    return <Image
        source={logo}
        resizeMode={"contain"}
        style={{
            width: '90%',
            height: 100 * rem,
            position: 'absolute',
            top: 0
            // position: 'absolute'
        }}
    />
}