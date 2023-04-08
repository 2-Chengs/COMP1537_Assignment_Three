console.log('setup');

const setup = () => {

    $('#nameSearchButton').click(async () => {
        // build the query
        const query = {
            type: "nameSearch",
            name: $('#nameSearchInput').val(),
            // projectionFilters: {
            //     name: true,
            //     weight: false
            // }
        }

        const res = await axios.post("http://localhost:3000/search", query)

        $('#searchResults').empty();
        $('#searchResults').html(JSON.stringify(res.data));
    })

    $('#weightSearchButton').click(async () => {
        // build the query
        const query = {
            type: "weightSearch",
            minWeight: $('#minWeightSearchInput').val(),
            maxWeight: $('#maxWeightSearchInput').val(),
            // projectionFilters: {
            //     name: true,
            //     weight: false
            // }
        }

        const res = await axios.post("http://localhost:3000/search", query)

        $('#searchResults').empty();
        $('#searchResults').html(JSON.stringify(res.data));
    })

    $('#foodButton').click(async () => {
        var query = {}
        if ($('#apple').is(':checked') && $('#carrot').is(':checked')) {
            query = {
                type: "foodSearch",
                loves: ["apple", "carrot"]
                
            }
        } else if ($('#apple').is(':checked')) {
            query = {
                type: "foodSearch",
                loves: "apple",
            }

        } else if ($('#carrot').is(':checked')) {
            query = {
                type: "foodSearch",
                loves: "carrot",
            }
        } else {
            query = {
                type: "foodSearch",
                loves: "",
            }
        }


        const res = await axios.post("http://localhost:3000/search", query)

        $('#searchResults').empty();
        $('#searchResults').html(JSON.stringify(res.data));
    })

    $('#filterButton').click(async () => {
        // build the query
        var query = {};
        if ($('#nameFilter').is(':checked') && $('#weightFilter').is(':checked')) {
             query = {
                type: "nameAndWeightFilter",
                projectionFilters: {
                    name: true,
                    weight: true,
                    _id: false
                }
            }
        } else if ($('#nameFilter').is(':checked')) {
             query = {
                type: "nameFilter",
                projectionFilters: {
                    name: true,
                    _id: false
                }
            }
        } else if ($('#weightFilter').is(':checked')) {
             query = {
                type: "weightFilter",
                projectionFilters: {
                    _id: false,
                    weight: true
                }
            }
        } else {
            query = {
                type: "noFilter",
            }
        }
        

        const res = await axios.post("http://localhost:3000/search", query)

        $('#searchResults').empty();
        $('#searchResults').html(JSON.stringify(res.data));
        
    })

}
$(document).ready(setup);