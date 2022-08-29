function SmallCard(props) {
    console.log(props);
    return (
        <li>
            <p>{props.name}</p>
            <p>{props.basePrice}</p>
        </li>
    );
}

export default SmallCard;
