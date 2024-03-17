import { useState } from "react";
import Cook from "../Cook/Cook";



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
        <div className="mt-8 text-center w-[450px]">
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
                    cooks.map(cook => <Cook key={cook.recipe_id} cookProp={cook} removeItem={removeItem} count={count} showCooking={showCooking} ></Cook>)
                }


            </div>

            <div>
                <h1 className="text-2xl">Current Cooking:{counter}</h1>
                <div className="divider"></div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Recipe Name</th>
                            <th>Preparing Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>{counter}</th>
                            <td>{cookItem.recipe_name}</td>
                            <td>{cookItem.preparing_time}</td>
                            <td>{cookItem.calories}</td>

                        </tr>

                    </tbody>
                </table>

                {/* <button className="btn" onClick={() => count()}>Increment</button> */}

            </div>

        </div>

    );
};

export default WantCook;