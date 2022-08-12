import React from 'react';

const Meal = ({ meal }) => {
    console.log(meal.meals[0])
    const { idMeal, strMealThumb, strArea, strTags, strMeal, strInstructions, strYoutube, strCategory } = meal.meals[0];
    return (
        <div className='flex my-5 justify-center items-center mx-auto'>
            <div className="card w-1/2 bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}  || {strArea}</h2>
                    <p>Type: {strTags} || {strCategory}</p>
                    <p><strong>Making Instructions:</strong> {strInstructions}</p>
                    <p><b>Want to watch Now?</b> <a className='text-green-600' href={strYoutube}>Go to Youtube</a></p>
                </div>
            </div>

        </div>
    );
};

export default Meal;
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const meals = await res.json();
    const allMeals = meals.meals;

    // Get the paths we want to pre-render based on posts
    const paths = allMeals.map(meal => ({
        params: { idMeal: meal.idMeal },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
    const meal = await res.json();

    // Pass post data to the page via props
    return { props: { meal } }
}