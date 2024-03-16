import { useState } from "react";


const Cook = ({ cookProp, removeItem }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = cookProp
    // console.log(cookProp)

    // const [count, setCount] = useState(0)
    // const countList = () => {
    //     const newCount = count + 1
    //     setCount(newCount)
    // }
    // console.log(countList)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}

                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>{recipe_id}</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                            <button onClick={() => removeItem(recipe_id)} className="btn bg-green-500 p-4">Preparing</button>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cook;