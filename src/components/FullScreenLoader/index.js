import React, { PureComponent } from 'react';
import {
    View,
    Image,
    Animated,
} from 'react-native';
import spinner from '../../images/spinner.gif'
import Modal from '../Modal';
import Text from '../Text';
import { rem } from '../../helpers';

class FullScreenLoader extends PureComponent {
    constructor(props) {
        super(props);

        this.opacity = new Animated.Value(this.props.startOn ? 1 : 0);
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.opacity, {
                    toValue: this.props.startOn ? 0 : 1,
                    duration: 1000
                }),
                Animated.timing(this.opacity, {
                    toValue: this.props.startOn ? 1 : 0,
                    duration: 1000
                })
            ])
        ).start();
    }
    render() {
        return (<View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image
                source={spinner}
                resizeMethod={"scale"}
                resizeMode={"contain"}
                style={{
                    width: '90%',
                    // opacity: this.opacity
                }}
            />
            {this.props.error && <Modal
                title={"Error"}
                onRequestClose={this.props.onRequestClose}

                cancelText={"Reintentar"}
            >
                <Text
                    bold
                    style={{
                        fontSize: 8 * rem,
                        marginVertical: 10 * rem,
                        marginHorizontal: 10 * rem,
                        textAlign: 'center',
                        lineHeight: 9 * rem
                    }}
                >
                    Sucedio un error. Verifica tu conexión a internet y vuelve a intentarlo.
                </Text>
            </Modal>}
        </View>)
    }
}

export default FullScreenLoader;