import React, { PureComponent } from 'react';
import {
    Dimensions,
    View,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Content from '../../components/Content';
import { withNavigationFocus } from 'react-navigation'
import MapView, { Marker } from 'react-native-maps';
import {
    setUserReducer,
    setReducerCareCenter
} from '../../actions';
import Text from '../../components/Text';
import { positionSelector } from '../../selectors';
import Axios from 'axios';
import Button from '../../components/Button';
import {
    GooglePlacesApi
} from '../../utils';
import { rem } from '../../helpers';

const {
    height
} = Dimensions.get('window');
class Home extends PureComponent {
    state = {

    }
    componentDidMount() {
        console.log('DID MOUNT');
        const that = this;
        navigator.geolocation.getCurrentPosition(
            position => {
                that.props.setUserReducer({
                    key: 'position',
                    value: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: this.props.position ? this.props.position.latitudeDelta : 0.0022,
                        longitudeDelta: this.props.position ? this.props.position.longitudeDelta : 0.0421,
                    }
                })
                navigator.geolocation.watchPosition(
                    (position) => {
                        that.props.setUserReducer({
                            key: 'position',
                            value: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                latitudeDelta: this.props.position ? this.props.position.latitudeDelta : 0.0022,
                                longitudeDelta: this.props.position ? this.props.position.longitudeDelta : 0.0421,
                            }
                        })
                        console.log('WATCHING', position);
                    },
                    (error) => {
                        console.log('WATCHING|||ERROR', error);
                    }, {
                        enableHighAccuracy: true
                    })
            },
            error => {
                console.log({ error })
            },
            {
                enableHighAccuracy: false,
                timeout: 20000,
                maximumAge: 1000,
            }
        );




    }
    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused && this.props.isFocused) {

        }
    }

    async  _onSearch() {
        try {
            const { longitude, latitude } = this.props.position;

            if (latitude && longitude) {
                const GPA = new GooglePlacesApi(latitude, longitude);

                const { data } = await GPA.getNearPlaces();
                console.log(data.results)
                this.props.setReducerCareCenter({
                    key: 'nearCareCenters',
                    value: data.results.map(({ geometry, name, id }) => {
                        return {
                            position: {
                                latitude: geometry.location.lat,
                                longitude: geometry.location.lng
                            },
                            name,
                            id
                        }
                    })
                })
                this.props.setReducerCareCenter({
                    key: 'nearHelpNeeded',
                    value: []
                })
            }

        } catch (e) {
            console.log({ e });
        }

    }
    async _onSearchPetsToHelp() {
        try {
            const { longitude, latitude } = this.props.position;

            if (latitude && longitude) {
                const GPA = new GooglePlacesApi(latitude, longitude, 1500, 'restaurant');

                const { data } = await GPA.getNearPlaces();
                console.log(data.results)
                this.props.setReducerCareCenter({
                    key: 'nearHelpNeeded',
                    value: data.results.map(({ geometry, name, id }) => {
                        return {
                            position: {
                                latitude: geometry.location.lat,
                                longitude: geometry.location.lng
                            },
                            name,
                            id
                        }
                    })
                })
                this.props.setReducerCareCenter({
                    key: 'nearCareCenters',
                    value: []
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (<Content
            style={{
                alignItems: 'center'
            }}
        >
            <MapView

                style={{
                    flex: 1,
                    width: "100%",
                    height,
                    display: 'flex'
                }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -71.4324,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0421,
                }}

                region={this.props.position}
            >
                {this.props.position && <Marker
                    pinColor={"#37bb5c"}
                    title={"Tu posición"}
                    image={require('../../images/person.png')}
                    coordinate={{
                        longitude: this.props.position.longitude,
                        latitude: this.props.position.latitude
                    }}
                />}
                {this.props.nearCareCenters.map((item) => {
                    return <Marker
                        key={item.id}
                        title={item.name}
                        image={require('../../images/vet.jpg')}
                        coordinate={{
                            longitude: item.position.longitude,
                            latitude: item.position.latitude
                        }}
                    />
                })}
                {this.props.nearHelpNeeded.map((item) => {
                    return <Marker

                        // pinColor={"blue"}

                        key={item.id}
                        // title={item.name}
                        image={require('../../images/paw.jpg')}
                        coordinate={{
                            longitude: item.position.longitude,
                            latitude: item.position.latitude
                        }}
                    />
                })}

            </MapView>
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: '#ad4102',
                        flex: 1,
                        paddingVertical: 15 * rem,
                        borderRightColor: '#FFF',
                        borderRightWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={this._onSearch.bind(this)}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 7 * rem
                        }}
                    >Buscar ayuda</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._onSearchPetsToHelp.bind(this)}
                    style={{
                        backgroundColor: '#ad4102',
                        flex: 1,
                        paddingVertical: 15 * rem,
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 7 * rem
                        }}
                    >Brindar ayuda</Text>
                </TouchableOpacity>
                {/* <Button
                    onPress={this._onSearch.bind(this)}
                    style={{
                        flex: 1
                        // position: 'absolute',
                        // top: 50,
                        // alignSelf: 'center'
                        // // left: 50
                    }}
                    text={"Buscar ayuda"}
                />
                <Button
                    onPress={this._onSearch.bind(this)}
                    style={{
                        flex: 1
                        // position: 'absolute',
                        // top: 50,
                        // alignSelf: 'center'
                        // // left: 50
                    }}
                    text={"Quiero Brindar ayuda"}
                /> */}
            </View>
        </Content>)
    }
}

const mapStateToProps = (state) => {

    return {
        position: positionSelector(state),
        nearCareCenters: state.carecenters.nearCareCenters,
        nearHelpNeeded: state.carecenters.nearHelpNeeded
    }
}

export default withNavigationFocus(connect(mapStateToProps, {
    setUserReducer,
    setReducerCareCenter
})(Home));