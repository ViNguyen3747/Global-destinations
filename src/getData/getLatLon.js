import axios from 'axios';


const getLatLon = city => {
    const geoCodeURL = "https://api.openweathermap.org/geo/1.0/direct?limit=1";
    const APIkey = "27cc0f9e54d73d8e67bfafb8beef78e4";

    return axios.get(geoCodeURL, { params: { q: city, appid: APIkey } })
        .then(res => res.data[0]);
}

export default getLatLon;