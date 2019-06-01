import React, { PureComponent } from 'react';
import {
    ScrollView,
    Image,
    KeyboardAvoidingView,
    View,
    Platform,
    StatusBar
} from 'react-native';
import { rem } from '../../helpers';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 10 : 20

class Content extends PureComponent {
    constructor(props) {
        super(props);
        if (this.props.onRef) {
            this.props.onRef(this)
        }
    }

    render() {
        if (this.props.notScroll) {
            return (<View
                style={{
                    flex: 1,
                    marginTop: Platform.OS == 'ios' ? 20 : 0,
                    alignItems: 'center',
                    backgroundColor: '#F9EED7',
                    ...(this.props.style || {})
                }}
            >
                <StatusBar
                    backgroundColor={'#ad4102'}
                />

                {this.props.children}
            </View>)
        }
        return (<KeyboardAvoidingView
            style={{
                flex: 1,
                backgroundColor: '#F9EED7',
                marginTop: Platform.OS == 'ios' ? 20 : 0,
            }}
            behavior={Platform.OS === "ios" ? "padding" : null}

            keyboardVerticalOffset={keyboardVerticalOffset}
        >
            <ScrollView
                ref={ref => this.scroll = ref}
                contentContainerStyle={{
                    alignItems: 'center',
                    backgroundColor: '#F9EED7',
                    ...(this.props.style || {})
                }}
            >
                <StatusBar
                    backgroundColor={'#ad4102'}
                />
                {this.props.children}
            </ScrollView>
        </KeyboardAvoidingView >)
    }
}



export default Content