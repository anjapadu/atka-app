import React, { PureComponent } from 'react';
import {
    TextInput,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import { rem } from '../../helpers';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Input extends PureComponent {
    state = {
        text: ''
    }
    _onChangeText(text) {
        if (this.props.onChangeText)
            return this.props.onChangeText(text)
        return this.setState({
            text
        })
    }
    render() {
        return <View
            style={{
                alignSelf: 'stretch',
                marginHorizontal: this.props.marginHorizontal || rem * 16,
                backgroundColor: '#f2f2f2',
                borderRadius: rem * 3,
                display: 'flex',
                flexDirection: 'row',
                marginTop: this.props.marginTop || 18 * rem
            }}
        >
            {!this.props.noLabel && < Text
                style={{
                    position: 'absolute',
                    left: 0,
                    top: -9 * rem,
                    color: '#00509d',
                    fontSize: 6.5 * rem,
                }}
            >
                {this.props.label || 'Label:'}
            </Text>
            }
            {
                (typeof this.props.icon == 'string') && <View
                    style={{
                        width: "10%",
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flex: 1
                    }}
                >
                    <Icon
                        name={this.props.icon}
                        size={8 * rem}
                        color="#9c9c9e"
                        solid
                    />
                </View>
            }
            <TextInput
                editable={!this.props.disabled}
                placeholder={this.props.placeholder || ''}
                secureTextEntry={this.props.isPassword}
                style={{
                    padding: 4.5 * rem,
                    paddingLeft: 0,
                    fontSize: 8 * rem,
                    letterSpacing: rem * 0.4,
                    flex: 8,
                    color: this.props.disabled ? '#a8a8a8' : '#000',
                    // width: '100%'
                    // backgroundColor: 'red'
                }}
                keyboardType={this.props.keyboardType}
                value={this.props.value || this.state.value}
                onChangeText={this._onChangeText.bind(this)}
            />
            {
                typeof this.props.error == 'string' && < Text
                    style={{
                        color: 'red',
                        letterSpacing: 0.2 * rem,
                        position: 'absolute',
                        bottom: -6.5 * rem,
                        fontSize: 5 * rem
                    }}
                >
                    {this.props.error}
                </Text>
            }
            {
                this.props.clickeable && <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        left: 0,
                        top: 0
                    }}
                />
            }
        </View >
    }
}
