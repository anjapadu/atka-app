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
import FullScreenLoader from '../../components/FullScreenLoader';

class Helps extends PureComponent {
    state = {
        showModalDonation: false,
        showModalContact: false,
        donationAmount: '',
        cardName: '',
        cardNumber: '',
        cardDate: '',
        cardCVV: '',

        showConfirm: false,
        isLoading: false
    }

    _onSubmit() {
        this.setState({
            errorAmount: false,
            errorName: false,
            errorCard: false,
            errorDate: false,
            errorCVV: false
        })
        if (this.state.showModalDonation) {

            if (this.state.donationAmount.trim() === '') {
                return this.setState({
                    errorAmount: 'Ingrese monto'
                })
            }
            if (this.state.cardName.trim().length < 6) {
                return this.setState({
                    errorName: 'Ingrese nombre de la tarjeta'
                })
            }
            if (this.state.cardNumber.trim().length < 6) {
                return this.setState({
                    errorCard: 'Numero de tarjeta inválido'
                })
            }
            if (this.state.cardDate.trim().length < 7) {
                return this.setState({
                    errorDate: 'Ingrese fecha de vencimiento válida'
                })
            }
            if (this.state.cardCVV.trim().length < 3) {
                return this.setState({
                    errorCVV: 'Ingrese CVV válido'
                })
            }

        }

        this.setState({
            isLoading: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    showConfirm: true,
                    showModalDonation: false,
                    showModalContact: false,
                    isLoading: false,
                    donationAmount: '',
                    cardName: '',
                    cardNumber: '',
                    cardDate: '',
                    cardCVV: '',
                })
            }, 2500);
        })
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
                            source={par ? pet1 : pet2}
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
        if (this.state.isLoading) {
            return <FullScreenLoader />
        }
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
                                    paddingHorizontal: 2 * rem,
                                    paddingTop: 2 * rem
                                }}
                            >
                                <Image
                                    resizeMode={"contain"}
                                    source={par ? pet1 : pet2} º
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
                    this._onSubmit()
                }}
            >
                <Input
                    onChangeText={(text) => {
                        this.setState({
                            donationAmount: text
                        })
                    }}
                    label={"Monto a donar"}
                    keyboardType={"numeric"}
                    marginHorizontal={5 * rem}
                    placeholder={"Monto en soles"}
                    icon={"coins"}
                    value={this.state.donationAmount}
                    error={this.state.errorAmount}
                />

                <Input
                    onChangeText={(text) => {
                        this.setState({
                            cardName: text
                        })
                    }}
                    label={"Nombre completo"}
                    marginHorizontal={5 * rem}
                    placeholder={"Monto en soles"}
                    icon={"user"}
                    error={this.state.errorName}
                    value={this.state.cardName}
                />

                <Input
                    onChangeText={(text) => {
                        this.setState({
                            cardNumber: text
                        })
                    }}
                    error={this.state.errorCard}
                    label={"Tarjeta"}
                    keyboardType={"numeric"}
                    marginHorizontal={5 * rem}
                    placeholder={"# tarjeta"}
                    icon={"credit-card"}
                    value={this.state.cardNumber}
                />
                <Input
                    onChangeText={(text) => {
                        this.setState({
                            cardDate: text
                        })
                    }}
                    error={this.state.errorDate}
                    label={"Fecha vencimiento"}
                    keyboardType={"numeric"}
                    marginHorizontal={5 * rem}
                    placeholder={"MM/YYYY"}
                    icon={"calendar"}
                    value={this.state.cardDate}
                />
                <Input
                    onChangeText={(text) => {
                        this.setState({
                            cardCVV: text
                        })
                    }}
                    error={this.state.errorCVV}
                    label={"CVV"}
                    keyboardType={"numeric"}
                    marginHorizontal={5 * rem}
                    placeholder={"Codigo de 3 dígitos"}
                    icon={"lock"}
                    value={this.state.cardCVV}
                />
            </Modal>}

            {this.state.showModalContact && < Modal
                title={"Contacto"}
                onRequestClose={() => {
                    this.setState({
                        showModalContact: false
                    })
                }}
            // onConfirm={() => {
            //     this._onSubmit()
            // }}
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

            {this.state.showConfirm && <Modal
                title={"Confirmación"}
                cancelText={"Aceptar"}
                onRequestClose={_ => {
                    this.setState({
                        showConfirm: false
                    }, _ => {
                        this.props.navigation.navigate('Helps')
                    })
                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize: 8 * rem,
                        marginVertical: 10 * rem,
                        marginHorizontal: 10 * rem,
                    }}
                >Felicidades!!! Tu solicitud de ayuda fue enviada exitosamente.</Text>
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