import Card from "./Card";
import card from "./card.module.css";
const Cards = ({characters}) => {
    return (
        <div className={card.containerCard}>
            {characters.map((item) => {
                return (
                    <div key={item.id}>
                        <Card  
                            name = {item.name}
                            species = {item.species} 
                            gender = {item.gender}
                            image = {item.image}
                        />
                    </div>
                )
            })}
        </div>
    )
};
export default Cards;