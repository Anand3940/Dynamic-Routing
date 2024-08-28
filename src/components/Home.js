import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    function clickHandler()
    {
        navigate("/support");
    }
  return (
    <div>
    <h2> This is Home page</h2>
    <button onClick={clickHandler}> Go to Support</button>
    </div>

  )
}

export default Home;
