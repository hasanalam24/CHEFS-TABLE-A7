

const SingleCard = ({ cardProps }) => {
    // console.log(cardProps)
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = cardProps;
    return (
        <div className="lg:grid lg:grid-cols-3">
            <div className="card w-96  shadow-xl mt-5">
                <figure><img src={recipe_image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <div className="divider"></div>

                    <h3>Ingredients: {ingredients.length}</h3>


                    <div className="flex">
                        <p>{preparing_time}</p>
                        <p>{calories}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;