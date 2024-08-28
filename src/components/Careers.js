import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Careers = () => {
    const navigate=useNavigate();
    function clickHandler()
    {
        navigate("/");
    }
  return (
    <div>
    <h2> This is careers page</h2>
   <button onClick={clickHandler}>Go to Home</button>
   <Outlet/>
    </div>
  )
}

export default Careers;