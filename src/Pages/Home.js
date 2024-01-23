import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate ();

    const handleClick = () => {
        navigate('/systeminfo');
    }
  return (
    <div className='home-content'>
        <h1 className='info'>Show the Current System Info In detail</h1>
        <Button type='default' onClick={handleClick} className='info-button'>Show System Info</Button>
    </div>
  )
}

export default Home;