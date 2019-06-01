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
                    backgroundColor: '#fff',
                    ...(this.props.style || {})
                }}
            >
                <StatusBar
                    backgroundColor={'#035197'}
                />

                {this.props.children}
            </View>)
        }
        return (<KeyboardAvoidingView
            style={{
                flex: 1,
                backgroundColor: '#FFF',
                marginTop: Platform.OS == 'ios' ? 20 : 0,
            }}
            behavior={Platform.OS === "ios" ? "padding" : null}

            keyboardVerticalOffset={keyboardVerticalOffset}
        >
            <ScrollView
                ref={ref => this.scroll = ref}
                contentContainerStyle={{
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    ...(this.props.style || {})
                }}
            >
                <StatusBar
                    backgroundColor={'#035197'}
                />
                {this.props.children}
            </ScrollView>
        </KeyboardAvoidingView >)
    }
}



export default Content