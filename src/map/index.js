import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './main-page.css';
import Search from './search';
import mapboxgl from 'mapbox-gl';
import Marker from './marker';
import getLatLon from "../getData/getLatLon";
import { getTrendings } from "../getData/getFourSquare";
import Modal from 'react-bootstrap/Modal';

mapboxgl.accessToken = 'pk.eyJ1IjoidG5ndXllbjQ0IiwiYSI6ImNrcjl5MWNxZTRkazYycG84d29xN3VkM2sifQ.x_cj60SVjn3wRQp9p0_lFw';

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const markers = useRef([]);
    const [error, setError] = useState({
        show: false,
        message: 'Something went wrong :('
    });
    const handleClose = () => setError(false);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-122.3316, 47.6126],
            zoom: 16.10,
            pitch: 45,
            bearing: -17.6,
        });
        map.current.on('load', function () {
            // Insert the layer beneath any symbol layer.
            var layers = map.current.getStyle().layers;
            var labelLayerId;
            for (var i = 0; i < layers.length; i++) {
                if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                    labelLayerId = layers[i].id;
                    break;
                }
            }
            // The 'building' layer in the Mapbox Streets
            // vector tileset contains building height data
            // from OpenStreetMap.
            map.current.addLayer(
                {
                    'id': 'add-3d-buildings',
                    'source': 'composite',
                    'source-layer': 'building',
                    'filter': ['==', 'extrude', 'true'],
                    'type': 'fill-extrusion',
                    'minzoom': 15,
                    'paint': {
                        'fill-extrusion-color': '#aaa',

                        // Use an 'interpolate' expression to
                        // add a smooth transition effect to
                        // the buildings as the user zooms in.
                        'fill-extrusion-height': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            15,
                            0,
                            15.05,
                            ['get', 'height']
                        ],
                        'fill-extrusion-base': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            15,
                            0,
                            15.05,
                            ['get', 'min_height']
                        ],
                        'fill-extrusion-opacity': 0.6
                    }
                },

                labelLayerId
            );

        });
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
        return () => map.current.remove();
    }, []);

    const getPlaces = (lat, lon, category) => {
        map.current.flyTo({
            center: [lon, lat],
            zoom: 16.10,
            essential: true
        });
        getTrendings(lat, lon, category).then(res => {
            addMarkers(res);
            if (res.length === 0) {
                setError({ show: true, message: "There aren't a lot of results in this city :( Try something more general" });
            }
        });
    }
    const getGeoCode = searchQuery => {
        console.log(searchQuery);
        getLatLon(searchQuery.city).then(res => getPlaces(res.lat, res.lon, searchQuery.category))
            .catch(err => {
                console.log(err.response);
                setError({ show: true, message: "Please enter a valid city" });
            });
    }

    const addMarkers = placeList => {
        if (markers.current) {
            markers.current.forEach((marker) => marker.remove());
        }
        placeList.forEach((place) => {
            const ref = React.createRef();
            // Create a new DOM node and save it to the React ref
            ref.current = document.createElement('div');
            // Create a Mapbox Marker at our new DOM node
            ReactDOM.render(
                <Marker detail={place.venue} />,
                ref.current
            );
            const newMarker = new mapboxgl.Marker(ref.current)
                .setLngLat([place.venue.location.lng, place.venue.location.lat])
                .addTo(map.current);
            markers.current.push(newMarker);
        })
    }

    return (
        <div>

            <div className="sidebar">
                <Search getGeoCode={getGeoCode} />
            </div>
            <div ref={mapContainer} className="map-container" />
            <Modal show={error.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {error.message}
                </Modal.Header>
            </Modal>
        </div >
    );
}

export default Map;