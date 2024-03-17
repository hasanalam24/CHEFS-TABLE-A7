

const SingleCard = ({ cardProps, handleClick }) => {
    // console.log(cardProps)
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = cardProps;
    return (
        <div className="flex w-3/4">
            <div className="lg:grid lg:grid-cols-3">
                <div className="card w-96  shadow-xl mt-5">
                    <figure><img className="w-[331px] h-[200px] rounded-xl" src={recipe_image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p>{short_description}</p>
                        <div className="divider"></div>

                        <h3 className="text-xl">Ingredients: {ingredients.length}</h3>
                        <ul className="list-disc">
                            <li>{ingredients[0]}</li>
                            <li>{ingredients[1]}</li>
                            <li>{ingredients[2]}</li>
                            <li>{ingredients[3]}</li>
                            <li>{ingredients[4]}</li>
                            <li>{ingredients[5]}</li>

                        </ul>


                        <div className="flex">
                            <p>{preparing_time}</p>
                            <p>{calories}</p>
                        </div>
                        <div className="card-actions">
                            <button onClick={() => handleClick(cardProps)} className="btn btn-primary">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleCard;