import React, {useEffect, useState} from 'react'
import css from './MainPage.module.sass'
import {NavLink} from "react-router-dom";
import Preroll from "../common/preroll/preroll";


const MainPage = (props) => {


    return (<>


            <Preroll/>

            <div className={css.wrapper}>


                <div className={css.content}>
                    <h1>InstagramX, <NavLink className={css.navlink_main} to='/aboutInstagramX'> be
                        famous.</NavLink>
                        .</h1>
                    <h2>High qality<NavLink className={css.navlink_main} to='/aboutInstagramX'> services</NavLink>
                    </h2>
                </div>


            </div>


        </>
    )
}
export default MainPage
