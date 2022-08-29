import SmallCard from "./SmallCard";

function SmallCardList(props) {
    console.log(props.items[0].items);
    return (
        <ul>
            {props.items[0].items.map((item) => {
                return (
                    <SmallCard
                        key={item.id}
                        name={item.name}
                        basePrice={item.basePrice}
                        iconLink={item.iconLink}
                    />
                );
            })}
        </ul>
    );
}

export default SmallCardList;
