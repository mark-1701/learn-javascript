export default function geolocationControl(latitude, longitude, precision) {
  const $latitudeLabel = document.querySelector(latitude),
    $longitudeLabel = document.querySelector(longitude),
    $precisonLabel = document.querySelector(precision),
    $googleMapsLink = document.querySelector("#google-maps-link");
  let link;

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    $latitudeLabel.textContent += crd.latitude;
    $longitudeLabel.textContent += crd.longitude;
    $precisonLabel.textContent += crd.accuracy + " metros";
    link = generateGoogleMapsLink(crd.latitude, crd.longitude);
    $googleMapsLink.textContent = "link de google Maps";
    $googleMapsLink.href = link;


    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.error(`ERROR(${err.code}): ${err.message}`);
  }

  function generateGoogleMapsLink(latitud, longitude) {
    const link = `https://www.google.com/maps?q=${latitud},${longitude}`;
    return link;
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

}