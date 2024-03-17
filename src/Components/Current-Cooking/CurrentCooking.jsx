

const CurrentCooking = ({ cookProp }) => {
    // console.log(cookProp)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}

                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th></th>
                            <td>{cookProp.recipe_name}</td>
                            <td></td>
                            <td></td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CurrentCooking;

