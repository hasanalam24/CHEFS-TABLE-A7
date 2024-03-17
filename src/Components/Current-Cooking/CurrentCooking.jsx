

const CurrentCooking = ({ cookProp }) => {
    console.log(cookProp)
    const { recipe_id, recipe_name, preparing_time, calories } = cookProp
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

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CurrentCooking;

