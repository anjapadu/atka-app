import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { rem } from '../../helpers';

class Button extends PureComponent {
    state = {
        isPressed: false
    }
    _getBackgroundColor() {
        if (this.props.disabled) {
            return '#c8c8c8'
        }
        if (this.props.secondary)
            return '#fdb337'
        return '#ad4102'
    }
    render() {
        return (<TouchableOpacity
            {...this.props}
            onPressIn={() => this.setState({
                isPressed: true
            })}
            onPressOut={() => this.setState({
                isPressed: false
            })}
            disabled={this.props.isLoading || this.props.disabled}
            activeOpacity={0.8}
            style={{
                alignSelf: 'stretch',
                marginHorizontal: rem * 16,
                borderRadius: rem * 1.2,
                display: 'flex',
                flexDirection: 'row',
                marginTop: 16 * rem,
                justifyContent: 'center',
                padding: 5.5 * rem,
                paddingVertical: this.props.small ? 3 * rem : 5.5 * rem,
                borderWidth: 2,
                borderColor: this._getBackgroundColor(),
                backgroundColor: this.props.outlined ? (this.state.isPressed ? this._getBackgroundColor() : '#fff') : this._getBackgroundColor(),
                ...(this.props.style || {}),
            }}
        >
            {this.props.isLoading ? <ActivityIndicator
                color={this.props.outlined ? this._getBackgroundColor() : "#fff"}
                size={"small"}
            /> : <Text
                style={{
                    fontFamily: 'Gotham Medium',
                    fontSize: this.props.small ? 6 * rem : 8 * rem,
                    color: this.props.outlined ? (this.state.isPressed ? '#fff' : this._getBackgroundColor()) : "#fff",
                    letterSpacing: 0.4 * rem
                }}
            >
                    {this.props.text || 'Button text'}
                </Text>}
        </TouchableOpacity>)
    }
}

export default Button;