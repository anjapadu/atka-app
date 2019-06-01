import React from 'react';
import { Text } from 'react-native';
import { rem } from '../../helpers';

export default (props) => {
    return <Text
        style={{
            color: '#0a1b5a',
            fontSize: 9 * rem,
            marginBottom: 5 * rem,
            marginHorizontal: 2 * rem,
            ...(props.style || {})
        }}
    >
        {props.children}
    </Text>
}