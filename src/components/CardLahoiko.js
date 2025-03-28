import React from 'react';
import avatar from '../images/Lahoiko_Dmytro.jpg'
const CardLahoiko = () => {
    return (
        <div className='CardLahoiko'>
            <h3> <img src={avatar} alt="Lahoiko" width="50" />  Dmytro Lahoiko (студент) </h3>
            <p>Хобі: економіка, історія, право</p>
            <p>Знання програмного забезпечення: Photoshop, Visual Studio, ProShow, Matlab, КОМПАС-3D, Sweet Home 3D</p>
            <p>Володіння мовами програмування: HTML, CSS, C++, C#, Python, JavaScript</p>
        </div>
    );
};
export default CardLahoiko;