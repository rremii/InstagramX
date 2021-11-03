import css from './ArrowToTop.module.sass'
import {NavLink} from "react-router-dom";
import { useState} from "react";

const ArrowToTop = () => {


    let [active, isActive] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= window.innerHeight) isActive(true)
        else isActive(false)
    })
    return <>
        <div className={[css.arrow, active && css.active].join(' ')}>
            <NavLink to='/'>
                &uarr;
            </NavLink>
        </div>

    </>


}
export default ArrowToTop