import React from 'react';
import './AllBlood.css';


const AllBlood = (props) => {
   const {blood_group, total} = props.blood;
    return (
        <div className='col-lg-4 '>
            <div className='available_blood'>
                <h4 style={{color:'red', fontWeight:'bold'}} className='text-center'>{blood_group}</h4>
                <h6  className='text-center'>Total Blood Available {total} Units</h6>
            </div>
        </div>
    );
};

export default AllBlood;