import React, { PureComponent } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux'

class Map extends PureComponent {
    render() {
        return (<View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Map</Text>
        </View>)
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, {

})(Map);