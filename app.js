var ip_address = '';
var city = '';
var country_code = '';

function getIP(input) {
    async function json(url) {
    return await fetch(url).then(res => res.json());
    }

    let apiKey = 'bcd5b4ee60b2c1b1cda872ad275d3c2be5ec7201a5e12eff02495b21';
    json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
        ip_address = data.ip;
        city = data.city;
        country_code = data.country_code;
        var latitude = data.latitude;
        var longitude = data.longitude;
        console.log(latitude, longitude);

        mapit(latitude , longitude);

    });
}


function mapit(latitude,longitude){
    console.log("working on map");

    //function to get IP of user and display it on a map using leaflet js.
    document.getElementById('user-ip-btn').addEventListener('click' , getIP);

    var mymap = L.map('mapid').setView([latitude , longitude], 15);


    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        // className: 'map-tiles'
    }).addTo(mymap);
}

document.getElementById('user-ip-btn').addEventListener('click' , getIP);

document.getElementById('input-custom-ip').addEventListener('click' , () => {
    var input = document.getElementById('ip-input').value;
    getIP(input);
});