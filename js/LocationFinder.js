"use strict";

class LocationFinder {
  constructor() {
    this._location = null;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this._location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
      });
    } else {
      console.log( "Geolocation is not supported by this browser.");
    }
  }

  get location() {
      return this._location
  }

  getDistance(latitude, longitude) {
    if ((latitude ==this._location.lat) && (longitude ==this._location.lon)) {
      return 0;
    }
    else {
      var radlatitude = Math.PI * latitude/180;
      var radlat2 = Math.PI *this._location.lat/180;
      var theta = longitude-this._location.lon;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlatitude) * Math.sin(radlat2) + Math.cos(radlatitude) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = ((dist * 60 * 1.1515) * 1.609344);
      return dist;
    }

  }
}


export default LocationFinder;