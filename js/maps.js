var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 38.8791783, lng: -99.3267702},
		zoom: 5
	});
}