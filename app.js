function showRoute() {
  const route = document.getElementById("routeSelect").value;
  const output = document.getElementById("output");

  if (route === "") {
    output.innerHTML = "Please select a route.";
  }
  else if (route === "Jaro - City Proper") {
    output.innerHTML = "Fare: ₱13 | Estimated Time: 15 mins";
  }
  else if (route === "Mandurriao - SM") {
    output.innerHTML = "Fare: ₱15 | Estimated Time: 20 mins";
  }
  else if (route === "La Paz - CPU") {
    output.innerHTML = "Fare: ₱12 | Estimated Time: 10 mins";
  }
}

/* REGISTER SERVICE WORKER */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js", { scope: "./" })
    .then(() => console.log("Service Worker Registered"));

}
