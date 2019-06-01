import React, { PureComponent } from 'react';
import {
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import Content from '../../components/Content';
import { withNavigationFocus } from 'react-navigation'
import Text from '../../components/Text';
import MapView from 'react-native-maps';

const {
    height
} = Dimensions.get('window');
class Home extends PureComponent {
    state = {

    }
    componentDidMount() {

    }
    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused && this.props.isFocused) {

        }
    }

    render() {
        return (<Content>
            <MapView

                style={{
                    flex: 1,
                    width: "100%",
                    height
                }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -71.4324,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0421,
                }}
            >



            </MapView>
        </Content>)
    }
}

const mapStateToProps = (state) => {

    return {

    }
}

export default withNavigationFocus(connect(mapStateToProps, {

})(Home));