import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) => 
        <GoogleMap
            defaultZoom={7}
            defaultCenter={{ lat: 0, lng: 0 }}>
            {props.isMarkerShown && <Marker position={{ lat: 0, lng: 0 }} />}
        </GoogleMap>
))

const Map = (props) => {
    return (
        <MapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `80vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    )
}

export default Map