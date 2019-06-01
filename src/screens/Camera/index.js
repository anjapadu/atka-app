import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import DoubleOption from '../../components/DoubleOption';
import H1 from '../../components/H1';
import { rem } from '../../helpers';
import Input from '../../components/Input';
import Br from '../../components/Br';
import Logo from '../../components/Logo';

const options = {
    title: 'Selecciona o toma una foto',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};



class PhotoScreen extends PureComponent {
    state = {
        imageToShare: null,
        isDonation: false,
        showModal: false,
        amount: ''
    }
    _onPhotoAdd() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                console.log('data:image/jpeg;base64,' + response.data);
                this.setState({
                    imageToShare: source,
                });
            }
        });
    }
    render() {
        return (<View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Logo />
            {this.state.imageToShare && <Image
                source={this.state.imageToShare}
                style={{
                    width: '100%',
                    height: "100%"
                }}
            />}
            <View
                style={{
                    position: 'absolute',
                    backgroundColor: !this.state.imageToShare ? null : 'rgba(0,0,0,0.5)',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 15 * rem

                }}
            >
                <H1
                    style={{
                        color: !this.state.imageToShare ? '#ad4102' : '#fff'
                    }}
                >Ayuda a un anemaleto =)</H1>

                {!this.state.imageToShare && <Button

                    onPress={this._onPhotoAdd.bind(this)}
                    text={"Compartir"}

                />}
                {this.state.imageToShare && <View
                    style={{
                        flexDirection: 'row',

                    }}
                >
                    <Button
                        style={{
                            flex: 1
                        }}
                        // onPress={this._onPhotoAdd.bind(this)}
                        text={"Subir"}
                        onPress={_ => this.setState({
                            showModal: true
                        })}
                    />
                    <Button
                        style={{
                            flex: 1
                        }}
                        onPress={this._onPhotoAdd.bind(this)}
                        text={"Elegir otra"}

                    />
                </View>}
            </View>
            {this.state.showModal && <Modal
                onRequestClose={_ => this.setState({
                    showModal: false
                })}
                cancelText={"Cancelar"}
                onConfirm={_ => {

                }}
                title={"Completar"}
            >
                <DoubleOption

                    changeOption={_ => {
                        this.setState({
                            isDonation: !this.state.isDonation
                        })
                    }}
                    label={"¿Es donación o adopción?"}
                    selected={this.state.isDonation}
                />

                {this.state.isDonation && <Input
                    value={this.state.amount}
                    onChangeText={(amount) => {
                        this.setState({
                            amount
                        })
                    }}
                    keyboardType={"numeric"}
                    placeholder={"Ingresa monto meta"}
                    marginHorizontal={5 * rem}
                    label={"Monto meta"}
                    icon={"coins"}
                />}
                <Br />
                <Br />
                <Br />
            </Modal>}
        </View >)
    }
}

export default PhotoScreen;