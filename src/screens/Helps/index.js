import React, { PureComponent } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import { helpsSelector } from '../../selectors';
import { } from '../../actions';
import H1 from '../../components/H1';
import { rem } from '../../helpers';
import Button from '../../components/Button';

class Helps extends PureComponent {

    _renderHelps() {
        if (this.props.helps.length == 0) {
            return <React.Fragment>
                <H1
                    style={{
                        textAlign: 'center',
                        paddingHorizontal: 10 * rem
                    }}
                >No has ayudado a ninguna mascota aún</H1>
                <Button
                    onPress={() => this.props.navigation.navigate("Camera", {
                        activeCamera: true
                    })}
                    text={"Publicar y ayudar"}
                />
            </React.Fragment>
        }
    }
    render() {
        return (<View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {this._renderHelps()}
        </View>)
    }
}

const mapStateToProps = (state) => {

    return {
        helps: helpsSelector(state)
    }
}

export default connect(mapStateToProps, {

})(Helps);