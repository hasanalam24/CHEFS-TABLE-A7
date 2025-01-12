import { useState } from "react";


const Cook = ({ cookProp, removeItem, count, showCooking, index }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = cookProp

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}

                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>{(index + 1)}</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                            <button onClick={() => (removeItem(recipe_id), count(), showCooking(cookProp))} className="btn bg-green-500 p-4">Preparing</button>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cook;