import React from 'react';
// import { useNav } from '../customHooks/useNav';
import './page.css';
import PText from "../component/ptext"
const Home = () => {
	return (
    <div>
        <div className="container">
            <h1 className="hero__heading">
                <span>Antonina Kacperska</span>
            </h1>
            <div className="hero__img">
                <img src='https://drive.google.com/uc?export=view&id=13xgev4G_p-i7mG33Jl-OTyk18rQoAEui'
                    alt='ddd'
                />
            </div>
            <div className="hero__info">
                <PText>Nisio robi design</PText>
            </div>
        </div>
    </div>
	);
};

export default Home;
