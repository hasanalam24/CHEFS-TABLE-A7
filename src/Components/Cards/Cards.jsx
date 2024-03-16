import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";


const Cards = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('dataLoad.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    // console.log(cards)
    return (
        <div className="mt-8 space-y-3 w-3/4 mx-auto ">
            <h1 className="text-4xl text-[#150B2B] font-semibold text-center">Our Receipe</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur ea debitis facere voluptatibus officia labore, aspernatur laborum, recusandae nisi illo dolor? Dolor porro voluptate quod recusandae non! Voluptates, aut magnam.</p>

            <div className="grid grid-cols-2">
                {
                    cards.map(card => <SingleCard key={card.id} cardProps={card}></SingleCard>)
                }
            </div>
        </div>


    );
};

export default Cards;