import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCQ8lI5Qn1hH4Gh0jVX7yYXyFPB7-NdJCY'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
