import React from "react"
import Rating from '@material-ui/lab/Rating';

const CustomRating = ({value, path}) => (
    <div className='col-12 col-md-6 mb-5'>
        <div style={{fontWeight: '700', color:'#323537'}}><img alt='company' src={path}/> {value}/5</div>
        <Rating name="read-only" value={value} readOnly />
    </div>
)

export default CustomRating