import React, { PureComponent } from 'react';
import {
    View,
    Text,
} from 'react-native';

class PhotoScreen extends PureComponent {
    render() {
        return (<View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>PhotoScreen</Text>
        </View>)
    }
}

export default PhotoScreen;