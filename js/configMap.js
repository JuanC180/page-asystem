window.onload = function(){
    var options = {
        zoom: 8
        , center: new google.maps.LatLng(18.2, -66.4)
        , mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    //var map = new google.maps.Map(document.getElementById('mapa'), options);


$(document).ready(function(){
	$("#miMapa").goMap({
		latitude:6.173595652781663,
		longitude: -75.58924868702888,
        zoom: 17,
        maptype:"SATELLITE",
        scaleControl:true,

	});    

    $.goMap.createMarker({
        latitude:6.173595652781663,
        longitude: -75.58924868702888,
        title:"Asystem de Colombia S.A.S",
        html:{
            content:"Asystem de Colombia S.A.S",
            popup:true
        }
    });
});


};

6.1734087,-75.589141