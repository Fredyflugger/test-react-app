import { useState, useEffect } from "react";

import SmallCardList from "../components/SmallCardList";

function MainPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://api.tarkov.dev/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: `{
            items {
                id
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
                const items = [];

                for (const key in data) {
                    const item = {
                        id: key,
                        ...data[key],
                    };
                    items.push(item);
                }
                setIsLoading(false);
                setFetchedData(items);
                // var fetchedData = data.data.items;
                // let filteredData = [];
                // fetchedData.forEach((el) => {
                //     let elSize = el.width * el.height;
                //     if (el.avg24hPrice / elSize > 14000) {
                //         el.pps = el.avg24hPrice / elSize;
                //         el.size = el.width + "*" + el.height;
                //         delete el["width"];
                //         delete el["height"];
                //         filteredData.push(el);
                //     }
                // });
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    return (
        <div>
            <p>Main Page</p>
            <SmallCardList items={fetchedData} />
        </div>
    );
}

export default MainPage;
