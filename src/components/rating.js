import React from "react"
import Rating from '@material-ui/lab/Rating';

const CustomRating = ({value, path}) => (
    <div className='col-12 col-sm-6 mb-5'>
        <div><img alt='company' src={path}/><span style={{fontWeight: '700', color:'#323537', marginLeft:'.5rem'}}>{value}/5</span></div>
        <Rating name="read-only" value={value} readOnly />
    </div>
)

export default CustomRating