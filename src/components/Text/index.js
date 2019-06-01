import React from 'react';
import { Text } from 'react-native';


export default (props) => {
    return <Text
        style={{
            color: '#00509d',
            ...(props.style || {})
        }}
    >
        {props.children}
    </Text>
}