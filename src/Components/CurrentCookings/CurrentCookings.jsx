

const CurrentCookings = ({ preparing }) => {
    console.log(preparing)


    return (
        <div className="mt-8 text-center w-[384px] mx-auto lg:w-[450px]">
            <div>
                <h1 className="text-2xl">Current Cooking: </h1>
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
                    preparing.map((cook, index) => <Cu)
                }


            </div>



        </div>

    );
};

export default CurrentCookings;