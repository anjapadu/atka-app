import React, { PureComponent } from 'react';
import {
    View,
    Platform,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { rem } from '../../helpers';
import Text from '../Text';
import {
    withNavigation,
} from 'react-navigation'

class BottomTabBar extends PureComponent {
    state = {
        visible: true
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            this.keyboardEventListeners = [
                Keyboard.addListener('keyboardDidShow', this.visible(false)),
                Keyboard.addListener('keyboardDidHide', this.visible(true))
            ];
        }
    }

    componentWillUnmount() {
        this.keyboardEventListeners && this.keyboardEventListeners.forEach((eventListener) => eventListener.remove());
    }

    visible = visible => () => this.setState({ visible });

    _renderTabs() {
        const routes = [{
            route: 'Home',
            icon: 'home',
            text: 'Inicio'
        }, {
            route: 'Camera',
            icon: 'camera',
            text: 'Share'
        }, {
            route: 'Helps',
            icon: 'paw',
            text: "Tus ayudas"
        }, {
            route: 'Profile',
            icon: 'user',
            text: "Perfil"
        }]
        return routes.map((item, index) => {
            return <TouchableOpacity
                key={`_${index}`}
                activeOpacity={0.8}
                style={{
                    ...tabStyle,

                }}
                onPress={() => {

                    this.props.navigation.navigate(item.route)
                }}
            >
                <Icon
                    name={item.icon}
                    size={rem * 10}
                    color={"#fff"}
                    solid={item.solid}
                    style={{
                        opacity: this.props.navigation.state.routes[this.props.navigation.state.index].routeName == item.route ? 1 : 0.5
                    }}
                />
                <Text
                    bold
                    style={{
                        ...textStyle,
                        opacity: this.props.navigation.state.routes[this.props.navigation.state.index].routeName == item.route ? 1 : 0.5
                    }}
                >
                    {item.text}
                </Text>
            </TouchableOpacity>
        })
    }
    render() {
        if (!this.state.visible)
            return null
        return (<View
            style={{
                display: "flex",
                flexDirection: 'row',
                backgroundColor: '#ad4102'
            }}
        >

            {this._renderTabs()}
        </View>)
    }
}

export default withNavigation(BottomTabBar);

const tabStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5 * rem
}

const textStyle = {
    fontSize: rem * 5,
    marginTop: rem * 2.5,
    color: '#fff',
    letterSpacing: rem * 0.2
}