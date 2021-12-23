
// onSuccess Callback
//
var onSuccess = function(position) {
   alert('Breitengrad: '       + position.coords.latitude          + '\n' +
         'Längengrad: '        + position.coords.longitude         + '\n' +
         'Höhe: '              + position.coords.altitude          + '\n' +
         'Exaktheit: '         + position.coords.accuracy          + '\n' +
         'Exaktheit Höhe: '    + position.coords.altitudeAccuracy  + '\n' +
         'Richtung: '          + position.coords.heading           + '\n' +
         'Geschwindigkeit: '   + position.coords.speed             + '\n' +
         'Zeitstempel: '       + position.timestamp                + '\n');
};

// onError Callback
//
var onError = function() {
   alert('Geolocation wird von diesem Browser nicht unterstützt!');
};

navigator.geolocation.getCurrentPosition(onSuccess, onError);

