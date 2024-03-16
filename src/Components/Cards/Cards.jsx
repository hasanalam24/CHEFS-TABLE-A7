import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import WantCook from "../WantCook/WantCook";


const Cards = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('dataLoad.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])


    const handleClick = (p) => {
        console.log('paisi etare', p)
    }
    // console.log(cards)
    return (
        <div>
            <div>
                <h1 className="text-4xl text-[#150B2B] font-semibold text-center mt-8">Our Receipe</h1>
                <p className="w-3/4 mx-auto text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur ea debitis facere voluptatibus officia labore, aspernatur laborum, recusandae nisi illo dolor? Dolor porro voluptate quod recusandae non! Voluptates, aut magnam.</p>
            </div>
            <div className="flex">

                <div className="mt-8 space-y-3 w-3/4 mx-auto ">
                    <div className="grid grid-cols-2">
                        {
                            cards.map(card => <SingleCard key={card.id} cardProps={card}
                                handleClick={handleClick}></SingleCard>)
                        }
                    </div>

                </div>
                <div className="w-1/4">
                    <WantCook></WantCook>
                </div>
            </div>
        </div>


    );
};

export default Cards;