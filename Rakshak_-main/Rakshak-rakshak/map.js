


function geoFindMe() {

const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');



function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;


  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
}

function error() {
  status.textContent = 'Unable to retrieve your location';
}

if(!navigator.geolocation) {
  status.textContent = 'Geolocation is not supported by your browser';
} else {
  
  navigator.geolocation.getCurrentPosition(success, error);
}

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);