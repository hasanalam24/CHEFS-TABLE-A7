


const WantCook = () => {
    // console.log(handleClick)
    // const { recipe_id, recipe_name, preparing_time, calories } = handleClick
    return (
        <div className="mt-8 text-center w-[400px]">
            <div>
                <h1 className="text-2xl">Want to cook</h1>
                <div className="divider"></div>

            </div>

            <div className="overflow-x-auto">
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
                            <th>hh</th>
                            <td>hh</td>
                            <td>hh</td>
                            <td>mm</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default WantCook;