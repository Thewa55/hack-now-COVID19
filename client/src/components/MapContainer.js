import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

  render() {
    return (
      <Map className="map" google={this.props.google} zoom={14} initialCenter={{lat: 40.854885,lng: -88.081807}}>
 
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
const newsapi = process.env.REACT_APP_NEWS_API

console.log(googleMapApi, "GOOGLE MAP API KEY")
console.log(newsapi, "NEWS API KEY")
console.log(process.env, "PROCESS")

export default GoogleApiWrapper({
  apiKey: googleMapApi
})(MapContainer)