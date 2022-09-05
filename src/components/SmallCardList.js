import { useState, useEffect } from "react";

import SmallCard from "./SmallCard";

function SmallCardList(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);
    const [SearchParam] = useState(["name", "shortName"]);

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
                        iconLink
                        name
                        shortName
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

    function searcheditems() {
        if (props.searchQuery === "") {
            return fetchedData[0].items;
        } else {
            return fetchedData[0].items.filter((item) => {
                return SearchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(props.searchQuery.toLowerCase()) > -1
                    );
                });
            });
        }
    }

    console.log("child search: " + props.searchQuery);
    return (
        <ul>
            {searcheditems().map((item) => {
                return (
                    <SmallCard
                        key={item.id}
                        name={item.shortName}
                        basePrice={item.basePrice}
                        iconLink={item.iconLink}
                    />
                );
            })}
        </ul>
    );
}

export default SmallCardList;
