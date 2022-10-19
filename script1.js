if('serviceWorker' in navigator) {
window.addEventListener('load', function() {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log("Service worker", registration.scope)
  }).catch(function (error) {
    console.log("service n worker", error);
  })
})
}