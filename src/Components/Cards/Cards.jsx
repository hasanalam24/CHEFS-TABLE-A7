import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";



const Cards = ({ handleClick, selectedCount }) => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('dataLoad.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])



    return (
        <div>



            <div className="mt-8 flex">
                <div className="mx-auto lg:grid grid-cols-1 lg:grid-cols-2 w-[384px] lg:w-[790px] ml-10  space-y-3 ">
                    {
                        cards.map(card => <SingleCard key={card.id} cardProps={card}
                            handleClick={handleClick}
                            selectedCount={selectedCount}
                        ></SingleCard>)
                    }
                </div>



            </div>


        </div>


    );
};

export default Cards;