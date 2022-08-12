import React from 'react';
import Link from 'next/dist/client/link';

const Cards = ({ meal }) => {
    const { idMeal, strMealThumb, strTags, strMeal, strInstructions } = meal;
    const readMoreText = 'read more'
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    {/* <p>{strInstructions}
                    </p> */}
                    <div className="card-actions justify-end">
                        <Link href={`/mymeals/${idMeal}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;