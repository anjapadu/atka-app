import React, { PureComponent } from 'react';
import {
    Modal,
    View,
    Animated,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Image
} from 'react-native';
import H1 from '../../components/H1';
import { rem } from '../../helpers';
import Text from '../Text';
import Button from '../Button';

const { width } = Dimensions.get('window')

class SelectModal extends PureComponent {
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
                        minHeight: 120 * rem,
                        borderRadius: 10 * rem,
                        transform: [{
                            scale: this.scale,
                        }],
                        maxHeight: '70%',
                        borderColor: '#ad4102',
                        borderWidth: 1 * rem
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
                    >Seleccione</H1>
                    <FlatList
                        style={{
                            borderRadius: 10 * rem
                        }}
                        contentContainerStyle={{

                        }}

                        data={this.props.options || []}
                        keyExtractor={(_, index) => `_${index}`}
                        ListEmptyComponent={<View
                            style={{
                                width: "100%",
                                height: "100%",
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                                minHeight: 50 * rem
                            }}
                        >
                            <Text>No hay elementos</Text>
                        </View>}
                        renderItem={({ item, index }) => {
                            return <TouchableOpacity
                                style={{
                                    backgroundColor: '#f2f2f2',
                                    paddingHorizontal: 8 * rem,
                                    paddingVertical: this.props.onlyImage ? 2 * rem : 8 * rem,
                                    marginVertical: 2 * rem,
                                    marginTop: index == 0 ? 4 * rem : 2 * rem,
                                    marginHorizontal: 5 * rem,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                activeOpacity={0.5}
                                onPress={_ => this.props.onSelect(item)}
                            >
                                {typeof item.image == 'string' && <Image
                                    source={{ uri: item.image }}
                                    resizeMode={"contain"}
                                    style={{
                                        width: '100%',
                                        height: 30 * rem
                                    }}
                                />}
                                {!this.props.onlyImage && <H1
                                    style={{
                                        padding: 0,
                                        marginBottom: 0,
                                        marginTop: 0,
                                        textAlign: 'center',
                                        lineHeight: 11 * rem
                                    }}
                                >{item.text}</H1>}
                            </TouchableOpacity>
                        }}
                    />
                    <Button
                        onPress={this.props.onRequestClose}
                        small
                        style={{
                            marginTop: 4 * rem,
                            marginBottom: 4 * rem,
                            marginHorizontal: 5 * rem,
                        }}
                        secondary
                        text={"Volver"}
                    />
                </Animated.View>
            </View>
        </Modal>
    }
}

export default SelectModal;