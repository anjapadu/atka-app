import Axios from "axios";

class GooglePlacesApi {

    constructor(latitud, longitude, radius = 1500, type = 'veterinary_care') {
        this.apiKey = "AIzaSyDZC_B0ou7Zm4BQJwejWxpOoxaI7bRvJ2k";

        this.location = `${latitud},${longitude}`;
        this.radius = radius;
        this.type = type
    }


    async getNearPlaces() {
        try {

            return Axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
                params: {
                    key: this.apiKey,
                    location: this.location,
                    radius: this.radius,
                    type: this.type
                }
            })
        } catch (e) {
            console.log(e);
        }
    }
    async getNearPetsToHelp() {
        try {

            return Axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
                params: {
                    key: this.apiKey,
                    location: this.location,
                    radius: this.radius,
                    type: this.type
                }
            })
        } catch (e) {
            console.log(e);
        }
    }


}

export {
    GooglePlacesApi
};