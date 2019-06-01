import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import { rem } from '../../helpers';
const { width } = Dimensions.get("window");


class DoubleOption extends PureComponent {
    changeOption(selected) {
        this.props.changeOption && this.props.changeOption(selected);
    }
    render() {
        const { selected } = this.props;
        return <View
            style={{
                flexDirection: 'column',
                alignSelf: 'flex-start',
                marginTop: 10,
                minWidth: width * 0.8,
                marginHorizontal: 6 * rem
            }}
        >
            <View>
                <Text
                    style={{
                        fontSize: 6.5 * rem,
                        color: '#00509d',
                        marginBottom: width * 0.015
                    }}
                >{(this.props.label || "Operaciones grandes")}</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <TouchableWithoutFeedback
                    onPress={this.changeOption.bind(this, true)}
                >
                    <View
                        style={{
                            borderTopLeftRadius: rem * 3,
                            borderBottomLeftRadius: rem * 3,
                            flex: 1,
                            padding: rem * 4,
                            backgroundColor: selected ? '#fdb337' : '#f2f2f2',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: selected ? '#FFF' : '#a8a8a8',
                                fontSize: 8 * rem
                            }}
                        >Donación</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={this.changeOption.bind(this, false)}
                >
                    <View
                        style={{
                            backgroundColor: selected ? '#f2f2f2' : '#fdb337',
                            flex: 1,
                            padding: rem * 4,
                            borderTopRightRadius: rem * 3,
                            borderBottomRightRadius: rem * 3,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: selected ? '#a8a8a8' : '#fff',
                                fontSize: 8 * rem

                            }}
                        >Adopción</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View >
    }
}

export default DoubleOption;