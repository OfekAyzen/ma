function doStuff() {
  const span = document.querySelector("#location");
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      location.innerText = lat.toFixed(2) + " " + long.toFixed(2);
    },
    (err) => {
      span.innerText = err;
    }
  );
}

function onWindowLoad() {
  const btn = document.querySelector("#btn");
  btn.onclick = doStuff;
}
window.onload = onWindowLoad;
