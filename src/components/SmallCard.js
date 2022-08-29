function SmallCard(props) {
    console.log(props);
    return (
        <li>
            <p>{props.name}</p>
            <p>{props.basePrice}</p>
            <img src={props.iconLink} alt=""></img>
        </li>
    );
}

export default SmallCard;
