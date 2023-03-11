import "./App.css";
import {Map , GoogleApiWrapper} from "google-map-react"

function MapContainer() {
  return (
    <Map 
    google = {this.props.google}
    style = {{width : '100%', height : '100%'}}
    zoom = {10}
    initialCenter = {
      {
        lat : 29.879243731219223,
        lng : 31.3143236160251
      }
    }
    />
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyc3mZg6P7r2Aze0dm4XiQTmHora9Zs3fGQ"
})(MapContainer)
