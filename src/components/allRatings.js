import React from "react"
import Rating from './rating';
import ratings from '../data/rating'

const Ratings = () => (
    <div className='row'>
        {ratings?.map((rating, idx) => <Rating key={idx} value={rating.value} path={rating.path}/>)}
    </div>
)

export default Ratings