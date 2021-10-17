import React, {useEffect, useState} from 'react'
import css from './MainPage.module.css'
import {NavLink} from "react-router-dom";
import Preroll from "../common/preroll/preroll";


const MainPage = (props) => {



    return (<>


            <Preroll />
            <nav>
                <div>
                    <span>b</span>
                    <span>to</span>
                    <span>v</span>
                </div>
            </nav>
            <div className={css.mainContent}>

                <h1>InstagramX <NavLink className={css.navlink_main} to='/aboutInstagramX'>, be famous.</NavLink>
                    .</h1>
                <h2>High qality<NavLink className={css.navlink_main} to='/aboutInstagramX'> services</NavLink></h2>
            </div>
        </>
    )
}
export default MainPage