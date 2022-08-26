fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        query: `{
    items {
        name
        basePrice
        avg24hPrice
        width
        height
    }
}`,
    }),
})
    .then((r) => r.json())
    .then((data) => {
        var fetchedData = data.data.items;
        let filteredData = [];
        fetchedData.forEach((el) => {
            let elSize = el.width * el.height;
            if (el.avg24hPrice / elSize > 14000) {
                el.pps = el.avg24hPrice / elSize;
                el.size = el.width + "*" + el.height;
                delete el["width"];
                delete el["height"];
                filteredData.push(el);
            }
        });
        console.log(filteredData);
    });
