function updateMap() {
    fetch("https://www.trackcorona.live/api/countries")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)

            rsp.data.forEach(element => {
                latitude = element.latitude
                longitude = element.longitude
                num_of_infected = element.confirmed
                if (num_of_infected>100000){
                    color = "rgb(0, 255, 0)";
                }

                else{
                    color = `rgb(0,${num_of_infected},  0)`;
                }

                // ploting data on the map

                new mapboxgl.Marker({
                    draggable: false,
                    color : color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);


            
                })

            })
        }


var interval = 3000
setInterval(updateMap, interval);