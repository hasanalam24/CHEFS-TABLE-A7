import { useState } from "react";
import Cook from "../Cook/Cook";
import CurrentCooking from "../Current-Cooking/CurrentCooking";


const WantCook = ({ cooks, removeItem }) => {
    // console.log(cooks)
    const [counter, setCounter] = useState(0)

    const count = () => {
        setCounter(counter + 1)
    }
    const [cookItem, setCookItem] = useState([])

    const showCooking = (id) => {
        setCookItem(id)
    }

    return (
        <div className="mt-8 text-center w-[384px] mx-auto lg:w-[450px]">
            <div>
                <h1 className="text-2xl">Want to cook: {cooks.length}</h1>
                <div className="divider"></div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Recipe Name</th>
                            <th>Preparing Time</th>
                            <th>Calories</th>
                            <th></th>

                        </tr>
                    </thead>

                </table>
                {
                    cooks.map((cook, index) => <Cook key={cook.recipe_id} cookProp={cook} index={index} removeItem={removeItem} count={count} showCooking={showCooking} ></Cook>)
                }


            </div>

            <div>
                <h1 className="text-2xl">Current Cooking: {counter}</h1>
                <div className="divider"></div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Recipe Name</th>
                            <th>Preparing Time</th>
                            <th>Calories</th>
                            <th></th>

                        </tr>
                    </thead>

                </table>
                {
                    cooks.map(currentItem => <CurrentCooking key={currentItem.recipe_id} cookProp={currentItem} ></CurrentCooking>)
                }


            </div>

        </div>

    );
};

export default WantCook;