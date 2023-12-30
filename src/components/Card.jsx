import card from "./card.module.css"

const Card = (Rick) => {
    const {name, species, gender, image} = Rick;

    return (
        <div className={card.itemCard}>
            <button>X</button>
            <h2 className="">{name}</h2>
            <p className="">{species}</p>
            <p>{gender}</p>
            <img src={image} alt="imagen de Rick Sanchez" />
        </div>
    )
};
export default Card;