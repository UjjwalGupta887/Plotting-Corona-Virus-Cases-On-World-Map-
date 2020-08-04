function updateMap() {
     fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.records)

    new mapboxgl.Marker({
        draggable: false,
        color: red
    })

})

}

updateMap();