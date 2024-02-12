import React from 'react';
import { NavLink } from 'react-router-dom';
import you from './images/you.jpeg';

const Home = () => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
             <div className="row">
                 <div className="col-10 mx-auto">
                    <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 oredr-lg-1 d-flex justify-content-center flex-column">
                         <h1>
                             Explore our contributions to the world by <strong className="brand-name"> Amn's Company! </strong>
                         </h1>
                         <h2 className="my-3">
                             We are the team of talents!
                         </h2>
                         <div className="mt-3">
                             <NavLink to="/contact" className="btn-get-started ">
                                 Know Us!
                             </NavLink>
                         </div>
                         <div className="col-lg-6 order-1 order-lg-2 header-img">
                             <img src={you} className="animated img-fluid" alt="home pic" />
                         </div>
                     </div>
                    </div>
                 </div>
             </div>
        </div>
        </section>
        </>
    )
}

export default Home;
