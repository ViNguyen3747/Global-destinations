import axios from 'axios';

const clientID = "H4F1E1JSIXBIEVX1ODH3XEQZWXL11OSFZKVKDTZNR0MJFH5R";
const clientSecret = "PSPKPSMZDZHNPZWX0GJWVX0VUL3E21V1LO1JLSME3MXMZE3D";

export const getTrendings = (lat, lon, category) => {
    const fourSquareURL = "https://api.foursquare.com/v2/venues/explore?";
    const config = {
        method: 'get',
        url: fourSquareURL,
        params: {
            client_id: clientID, client_secret: clientSecret,
            ll: lat.toString() + "," + lon.toString(),
            section: category, limit: "30",
            v: "20190425"
        }
    }
    return axios(config)
        .then(res => res.data.response.groups[0].items);
}

export const getTip = (id) => {
    const url = "https://api.foursquare.com/v2/venues/" + id + "/tips?";
    const config = {
        method: 'get',
        url: url,
        params: {
            client_id: clientID, client_secret: clientSecret,
            sort: "popular",
            v: "20190425"
        }
    }
    return axios(config).then(res => res.data.response.tips.items);
}
