import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Button from '../../components/Button';
import H1 from '../../components/H1';
import { rem } from '../../helpers';

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
        imageToShare: null
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
                        color: !this.state.imageToShare ? '#0a1b5a' : '#fff'
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
        </View >)
    }
}

export default PhotoScreen;