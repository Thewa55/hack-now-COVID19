import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

  render() {
    const style = {
        position: 'flex',
        width: '100%',
        height: '100%',
      }
      const containerStyle = {
        position: 'absolute',  
        width: '100%',
        height: '500px',
      }
      
    return (
      <Map 
        style={style} 
        google={this.props.google} 
        zoom={14} 
        center={this.props.coords}
        containerStyle={containerStyle}
        >
 
        <Marker 
                name={'Current location'} />
 
        <InfoWindow >
            <div>
              <h1></h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
const googleMapApi= process.env.REACT_APP_GOOGLE_MAP_KEY

export default GoogleApiWrapper({
  apiKey: googleMapApi
})(MapContainer)