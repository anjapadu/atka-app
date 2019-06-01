import React, { PureComponent } from 'react';
import {
    View,
    Text,

    Image,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { helpsSelector } from '../../selectors';
import { } from '../../actions';
import H1 from '../../components/H1';
import { rem } from '../../helpers';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Content from '../../components/Content';
import Br from '../../components/Br';
import pet1 from '../../images/pet1.jpg'
import pet2 from '../../images/pet2.jpeg'

import Modal from '../../components/Modal';

class Helps extends PureComponent {
    state = {
        showModalDonation: false,
        showModalContact: false,
        donationAmount: ''
    }
    _renderHelps() {
        if (!this.props.helps.length == 0) {
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

        return [{

        }, {}, {}, {}].map((item, index) => {
            let par = index % 2 === 0;
            return <View
                key={`_${index}`}
                style={{
                    // borderWidth: 1,
                    elevation: 2,
                    width: "90%",
                    backgroundColor: '#fff',
                    marginVertical: 2 * rem
                }}
            >
                <View
                    style={{
                        paddingVertical: 5 * rem,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#de750b'
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontWeight: '600',
                            letterSpacing: 0.6 * rem
                        }}
                    >{par ? 'ADOPCIÓN' : 'DONACIÓN'}</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingBottom: 15 * rem,

                    }}
                >

                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 2 * rem
                        }}
                    >
                        <Image
                            resizeMode={"contain"}
                            source={pet1}
                            style={{
                                width: '100%',
                                height: 30 * rem
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flex: 3,
                            paddingHorizontal: 2 * rem
                        }}
                    >
                        <Text>{par ? 'Perrito de X meses que busca dueño. Lo encontre en LUGAR y ya lo desparasité y operé. Es muy cariñoso y jugetón' : 'Ayuda a este animal que lo encontré atropellado en la avenida javier prado. Necesita una operación y uya encontré un veterinario económico.'}</Text>
                    </View>
                    {/* <Text></Text>
                    <Text></Text> */}

                    {!par && <View
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            width: "100%",
                            height: 10 * rem,
                            position: 'absolute',
                            bottom: 0,

                        }}
                    >
                        <View
                            style={{
                                backgroundColor: 'lightgreen',
                                width: "50%",
                                height: 10 * rem
                            }}
                        >
                            <Text>{`${(Math.random() * 500).toFixed(0)} / ${600}`}</Text>
                        </View>
                    </View>}
                </View>
            </View>
        })
    }
    render() {
        return (<Content
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Br />
            <Br />
            <Br />
            <Br />
            <Br />
            <H1>Lista de ayuda disponible</H1>
            <Br />
            <Br />
            <Br />
            {/* {this._renderHelps()} */}
            <FlatList
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'stretch'
                }}
                style={{
                    width: '100%',
                    alignSelf: 'center'
                }}
                ListHeaderComponent={() => <View
                    style={{
                        height: 10 * rem
                    }}
                />}
                ListFooterComponent={() => <View
                    style={{
                        height: 10 * rem
                    }}
                />}
                renderItem={({ item, index }) => {
                    let par = index % 2 === 0;
                    return <View
                        key={`_${index}`}
                        style={{
                            // borderWidth: 1,
                            elevation: 2,
                            width: "95%",
                            marginHorizontal: '2.5%',
                            backgroundColor: '#fff',
                            marginVertical: 2 * rem
                        }}
                    >
                        <View
                            style={{
                                paddingVertical: 5 * rem,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#de750b'
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontWeight: '600',
                                    letterSpacing: 0.6 * rem
                                }}
                            >{par ? 'ADOPCIÓN' : 'DONACIÓN'}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                paddingBottom: par ? 2 * rem : 15 * rem,

                            }}
                        >

                            <View
                                style={{
                                    flex: 1,
                                    paddingHorizontal: 2 * rem
                                }}
                            >
                                <Image
                                    resizeMode={"contain"}
                                    source={pet1}
                                    style={{
                                        width: '100%',
                                        height: 30 * rem
                                    }}
                                />
                            </View>

                            <View
                                style={{
                                    flex: 3,
                                    paddingHorizontal: 2 * rem
                                }}
                            >
                                <Text>{par ? 'Perrito de X meses que busca dueño. Lo encontre en LUGAR y ya lo desparasité y operé. Es muy cariñoso y jugetón' : 'Ayuda a este animal que lo encontré atropellado en la avenida javier prado. Necesita una operación y uya encontré un veterinario económico.'}</Text>
                                <Br />
                                <Br />
                                <Br />
                                {par ? <Button
                                    onPress={_ => this.setState({
                                        showModalContact: true
                                    })}
                                    style={{
                                        marginTop: 0,
                                        marginBottom: 0,
                                        paddingVertical: 2 * rem,
                                        paddingHorizontal: 0,
                                        marginRight: 0
                                    }}
                                    small
                                    text={"Contactar"}
                                /> : <Button
                                        onPress={_ => this.setState({
                                            showModalDonation: true
                                        })}
                                        style={{
                                            marginTop: 0,
                                            marginBottom: 0,
                                            paddingVertical: 2 * rem,
                                            paddingHorizontal: 0,
                                            marginRight: 0
                                        }}
                                        small
                                        text={"Donar"}
                                    />}
                            </View>
                            {/* <Text></Text>
                            <Text></Text> */}

                            {!par && <View
                                style={{
                                    backgroundColor: 'rgba(0,0,0,0.2)',
                                    width: "100%",
                                    height: 10 * rem,
                                    position: 'absolute',
                                    bottom: 0,

                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: 'lightgreen',
                                        width: "50%",
                                        height: 10 * rem
                                    }}
                                >
                                    <Text
                                        style={{
                                            textAlign: 'center'
                                        }}
                                    >{`${(Math.random() * 500).toFixed(0)} / ${600}`}</Text>
                                </View>
                            </View>}
                        </View>
                    </View>
                }}
                data={[{

                }, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
                keyExtractor={(item, index) => (`_${index}`)}
            />
            {this.state.showModalDonation && < Modal
                title={"Donación"}
                onRequestClose={() => {
                    this.setState({
                        showModalDonation: false
                    })
                }}
                onConfirm={() => {
                    
                }}
            >
                <Input
                    label={"Monto a donar"}
                    keyboardType={"numeric"}
                    marginHorizontal={5 * rem}
                    placeholder={"Monto en soles"}
                    icon={"coins"}
                    value={this.state.donationAmount}
                />

                <Input
                    label={"Nombre completo"}
                    marginHorizontal={5 * rem}
                    placeholder={"Monto en soles"}
                    icon={"user"}
                    value={this.state.donationAmount}
                />

                <Input
                    label={"Tarjeta"}
                    keyboardType={"numeric"}
                    marginHorizontal={5 * rem}
                    placeholder={"# tarjeta"}
                    icon={"credit-card"}
                    value={this.state.donationAmount}
                />
                <Input
                    label={"Fecha vencimiento"}
                    keyboardType={"numeric"}
                    marginHorizontal={5 * rem}
                    placeholder={"MM/YYYY"}
                    icon={"calendar"}
                    value={this.state.donationAmount}
                />
                <Input
                    label={"CVV"}
                    keyboardType={"numeric"}
                    marginHorizontal={5 * rem}
                    placeholder={"Codigo de 3 dígitos"}
                    icon={"lock"}
                    value={this.state.donationAmount}
                />
            </Modal>}

            {this.state.showModalContact && < Modal
                title={"Contacto"}
                onRequestClose={() => {
                    this.setState({
                        showModalContact: false
                    })
                }}
            >
                <Input
                    label={"Nombre de la persona"}
                    disabled
                    // keyboardType={"numeric"}
                    marginHorizontal={5 * rem}
                    // placeholder={"Monto en soles"}
                    icon={"user"}
                    value={'Gustavo Yance Cabieses'}
                />
                <Input
                    label={"Teléfono de contacto"}
                    disabled
                    // keyboardType={"numeric"}
                    marginHorizontal={5 * rem}
                    // placeholder={"Monto en soles"}
                    icon={"mobile"}
                    value={'+51 996699719'}
                />
                <Br />
                <Br />
                <Br />
            </Modal>}
        </Content>)
    }
}

const mapStateToProps = (state) => {

    return {
        helps: helpsSelector(state)
    }
}

export default connect(mapStateToProps, {

})(Helps);