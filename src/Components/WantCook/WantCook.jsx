import { useState } from "react";
import Cook from "../Cook/Cook";



const WantCook = ({ cooks, removeItem }) => {
    // console.log(cooks)
    const [counter, setCounter] = useState(0)
    const count = () => {
        setCounter(counter + 1)
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
                    cooks.map(cook => <Cook key={cook.recipe_id} cookProp={cook} removeItem={removeItem} count={count}></Cook>)
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

                </table>

                {/* <button className="btn" onClick={() => count()}>Increment</button> */}

            </div>

        </div>

    );
};

export default WantCook;