import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate=useNavigate();
    function clickHandler()
    {
        navigate("/careers");
    }
  return (
    <div>
    <h2> This is Support page</h2>
    <button onClick={clickHandler}>Go to Careers</button>
    </div>
  )
}
export default Support;