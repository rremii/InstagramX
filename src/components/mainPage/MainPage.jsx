import React, {useEffect, useState} from 'react'
import css from './MainPage.module.sass'
import {NavLink} from "react-router-dom";
import Preroll from "../common/preroll/preroll";


const MainPage = (props) => {


    console.log(props.width)
    return (<>


            <Preroll/>
            {/*<nav>*/}
            {/*    <div>*/}
            {/*        <span>b</span>*/}
            {/*        <span>to</span>*/}
            {/*        <span>v</span>*/}
            {/*    </div>*/}
            {/*</nav>*/}

            {/*<InView as="div" onChange={(inView, entry) => console.log('Inview:', inView,entry)}>*/}
            {/*    <h2>Plain children are always rendered. Use onChange to monitor state.</h2>*/}
            {/*</InView>*/}

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
