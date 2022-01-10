import React from 'react';
import { Link } from 'react-router-dom';
import fox from "./fox.jpg"
import './landing_page.css';




function LandingPage() {
    return (
        <div className='landingPage'>

            <h2>Click Enter to continue....</h2>

            <div className='enter'>
                <Link className='button' to="/postViewPage">Enter </Link>
            </div>

        </div>
    );

}

export default LandingPage;