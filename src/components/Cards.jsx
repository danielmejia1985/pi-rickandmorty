import Card from "./Card";
const Cards = ({characters}) => {
    return (
        <div>
            {characters.map((item) => {
                return (
                    <div key={item.id}>
                        <Card  name = {item.name} image = {item.image}/>
                    </div>
                )
            })}
        </div>
    )
};
export default Cards;