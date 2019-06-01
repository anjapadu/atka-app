import React, { PureComponent } from 'react';
import {
    Modal,
    View,
    Animated,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import H1 from '../../components/H1';
import { rem } from '../../helpers';
import Button from '../Button';

const { width } = Dimensions.get('window')

class CustomModal extends PureComponent {
    constructor(props) {
        super(props);
        this.scale = new Animated.Value(0);
        this.opacity = new Animated.Value(0);

    }
    componentDidMount() {
        this._onAnimate()
    }
    _onAnimate() {
        Animated.parallel([
            Animated.timing(this.scale, {
                toValue: 1,
                duration: 300
            }),
            Animated.timing(this.opacity, {
                toValue: 0.55,
                duration: 300
            })
        ]).start()
    }
    render() {
        return <Modal
            visible
            animated
            animationType={"fade"}
            transparent
            onRequestClose={this.props.onRequestClose}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={this.props.onRequestClose}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <Animated.View
                        style={{
                            backgroundColor: '#000',
                            flex: 1,
                            opacity: this.opacity
                        }}
                    />
                </TouchableOpacity>
                <Animated.View
                    style={{
                        backgroundColor: '#fff',
                        width: width - 16 * rem,
                        marginHorizontal: 6 * rem,
                        alignSelf: 'center',
                        minHeight: 50 * rem,
                        borderRadius: 10 * rem,
                        transform: [{
                            scale: this.scale,
                        }],
                        maxHeight: '70%',
                        borderColor: '#ad4102',
                        borderWidth: 1* rem
                    }}
                >
                    <H1
                        style={{
                            padding: 6 * rem,
                            textAlign: 'center',
                            borderTopRightRadius: 10 * rem,
                            borderTopLeftRadius: 10 * rem,
                            fontSize: 9 * rem,
                            marginBottom: 0,
                            borderBottomColor: '#ad4102',
                            borderBottomWidth: 2
                        }}
                    >{this.props.title || 'Title'}</H1>
                    {this.props.children}
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        {this.props.onRequestClose && <Button
                            onPress={this.props.onRequestClose}
                            small
                            style={!this.props.onConfirm ? {
                                marginTop: 4 * rem,
                                marginBottom: 4 * rem,
                                marginHorizontal: 6 * rem,
                                flex: 1

                            } : {
                                    marginTop: 4 * rem,
                                    marginBottom: 4 * rem,
                                    marginRight: 2.5 * rem,
                                    marginLeft: 6 * rem,
                                    flex: 1
                                }}
                            secondary
                            text={this.props.cancelText || "Cerrar"}
                            outlined
                        />}
                        {this.props.onConfirm && <Button
                            onPress={this.props.onConfirm}
                            small
                            style={!this.props.onRequestClose ? {
                                marginTop: 4 * rem,
                                marginBottom: 4 * rem,
                                marginHorizontal: 6 * rem,
                                flex: 1

                            } : {
                                    marginTop: 4 * rem,
                                    marginBottom: 4 * rem,
                                    marginLeft: 2.5 * rem,
                                    marginRight: 6 * rem,
                                    flex: 1,
                                }}
                            text={this.props.confirmText || "Aceptar"}
                        />}
                    </View>
                </Animated.View>
            </View>
        </Modal>
    }
}

export default CustomModal;