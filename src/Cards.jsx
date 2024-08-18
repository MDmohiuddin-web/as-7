

const Cards = ({ product, WanttoCookbtn }) => {
  const {
    recipe_name,
    // recipe_image,
    short_description,
    preparing_time,
    calories,
    ingredients,
    recipe_image
  } = product;
  return (
    <>
      <div className="  lg:flex flex-col justify-around m-auto  font-bold " >
        {/*  lg:w-[58%]*/}
        <div className="card m-auto my-5 p-5 w-[350px] lg:w-[400px] bg-base-100 shadow-md">
          <figure>
            <img className="rounded-lg"
              src={recipe_image}
              // "../src/assets/assignment-7-card-photo.png"
              alt="img not found"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipe_name}</h2>
            <p>{short_description}</p>
            <hr />

            <div>
              <p>ingredients : {ingredients.length}</p>
              <ul className="list-disc text-gray-600">
                {ingredients.map((ingredient, ex) => (
                  <li key={ex} >{ingredient}</li>
                ))}
              </ul>
            </div>

            <hr />
            <div className="flex  w-full">
              <p className="flex py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6  h-6"
                >
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                </svg>{" "}
                {preparing_time}
              </p>
              <p className="flex py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"></path>
                  <path d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"></path>
                </svg>{" "}
                {calories}
              </p>
            </div>
            <div className="card-actions  ">
              <button
                onClick={() => WanttoCookbtn(product)}
                className="btn btn-xl  btn-success hover:text-white"
              >
                Want to Cook
              </button>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default Cards;
