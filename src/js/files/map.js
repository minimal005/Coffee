function mapAdd() {
  let tag = document.createElement("script");
  tag.src =
    "https://maps.google.com/maps/api/js?sensor=false&amp;key=&callback=mapInit";
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
function mapInit(n = 1) {
  google.maps.Map.prototype.setCenterWithOffset = function (
    latlng,
    offsetX,
    offsetY
  ) {
    var map = this;
    var ov = new google.maps.OverlayView();
    ov.onAdd = function () {
      var proj = this.getProjection();
      var aPoint = proj.fromLatLngToContainerPixel(latlng);
      aPoint.x = aPoint.x + offsetX;
      aPoint.y = aPoint.y + offsetY;
      map.panTo(proj.fromContainerPixelToLatLng(aPoint));
    };
    ov.draw = function () {};
    ov.setMap(this);
  };
  var markers = new Array();
  var infowindow = new google.maps.InfoWindow({});
  var locations = [
    [new google.maps.LatLng(53.819055, 27.8813694)],
    [new google.maps.LatLng(53.700055, 27.5513694)],
    [new google.maps.LatLng(53.809055, 27.5813694)],
    [new google.maps.LatLng(53.859055, 27.5013694)],
  ];
  var options = {
    zoom: 10,
    panControl: false,
    mapTypeControl: false,
    center: locations[0][0],
    styles: [
      {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }, { color: "#e0efef" }],
      },
      {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
          { visibility: "on" },
          { hue: "#1900ff" },
          { color: "#c0e8e8" },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ lightness: 100 }, { visibility: "simplified" }],
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ visibility: "on" }, { lightness: 700 }],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{ color: "#7dcdcd" }],
      },
    ],
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.getElementById("map"), options);
  var icon = {
    url: "img/icons/map.svg",
    scaledSize: new google.maps.Size(18, 20),
    anchor: new google.maps.Point(9, 10),
  };
  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      icon: icon,
      position: locations[i][0],
      map: map,
    });
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          for (var m = 0; m < markers.length; m++) {
            markers[m].setIcon(icon);
          }
          var cnt = i + 1;

          marker.setIcon(icon);
          map.setCenterWithOffset(marker.getPosition(), 0, 0);
          setTimeout(function () {}, 10);
        };
      })(marker, i)
    );
    markers.push(marker);
  }
  if (n) {
    var nc = n - 1;
    setTimeout(function () {
      google.maps.event.trigger(markers[nc], "click");
    }, 500);
  }
}
if (document.querySelector("#map")) {
  mapAdd();
}
