import React from 'react';
import Cards from '../../components/Cards';

const index = ({ meals }) => {
    const allMeals = meals.meals;
    console.log(allMeals)
    return (
        <div>
            <h1>{allMeals.length}</h1>
            <div className='grid grid-cols-3 gap-4 lg:ml-8'>
                {
                    allMeals.map(meal => <Cards
                        key={meal.idMeal}
                        meal={meal}
                    ></Cards>)
                }
            </div>

        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await res.json();
    return {
        props: { meals: data }, // will be passed to the page component as props
    }
}