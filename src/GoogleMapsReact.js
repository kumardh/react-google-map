import { Map, GoogleApiWrapper, Marker, TrafficLayer  } from 'google-maps-react';
import React from 'react';
import {Component} from 'react';

const mapStyles = {
  width: '50%',
  height: '50%',
};

class GoogleMapsReact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{latitude: 12.9885142, longitude: 77.5477298}]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
      <>
        My other content
        <Map
          google={this.props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={{ lat: 12.9885142, lng: 77.5477298}}
        >
          {this.displayMarkers()}
          <TrafficLayer autoUpdate />
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo' //Development purpos only.
})(GoogleMapsReact);
