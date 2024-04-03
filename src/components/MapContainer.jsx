import { useState, useCallback } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';

const MapContainer = ({ lat, lng }) => {
    const mapStyles = {
        height: '50vh',
        width: '50vw'
    };

    let zoom = 14

    const schoolLocation = { lat: lat, lng: lng }

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {

        map.setZoom(zoom)

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (

        <GoogleMap
            mapContainerStyle={mapStyles}
            center={schoolLocation}
            onLoad={onLoad}
            onUnmount={onUnmount}
            zoom={zoom}
        >

            <MarkerF position={schoolLocation} title="school location" />

        </GoogleMap>

    );
};

export default MapContainer;