import Cook from "../Cook/Cook";



const WantCook = ({ cooks, removeItem }) => {
    // console.log(cooks)

    return (
        <div className="mt-8 text-center w-[400px]">
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
                        </tr>
                    </thead>

                </table>
                {
                    cooks.map(cook => <Cook key={cook.recipe_id} cookProp={cook} removeItem={removeItem}></Cook>)
                }


            </div>

            <div>
                <h1 className="text-2xl">Current Cooking:</h1>
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



            </div>

        </div>

    );
};

export default WantCook;