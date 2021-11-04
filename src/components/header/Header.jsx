import {NavLink} from "react-router-dom";
import icon from "../../images/outline_search_black_24dp.png";
import React, {useState} from "react";
import css from './Header.module.sass'

const Header = (props) => {

    let [isBurgerOpen, toggleBurger] = useState(false)

    return (


        <header className={css.header}>
            <div className={css.header_logo}>
                b <br/> to <br/> v
            </div>
            <div className={[css.header_links, isBurgerOpen && css.showed].join(' ')}>
                <NavLink onClick={() => {
                    toggleBurger && toggleBurger(false)
                     props.moveTo('mainpage')
                }} activeClassName={css.active} to='/mainpage'>
                    instagramX
                </NavLink>
                <NavLink onClick={() => {
                    toggleBurger && toggleBurger(false)
                }} activeClassName={css.active} to='buyMails'>
                    Buy Mails
                </NavLink>
                <NavLink onClick={() => {
                    toggleBurger && toggleBurger(false)
                }} activeClassName={css.active} to='buyServies'>
                    Buy Servies
                </NavLink>
                <NavLink onClick={() => {
                    toggleBurger && toggleBurger(false)
                    props.moveTo('aboutInstagramX')
                }} activeClassName={css.active} to='/aboutInstagramX'>
                    about instagramX
                </NavLink>
                <NavLink onClick={() => {
                    toggleBurger && toggleBurger(false)
                }} activeClassName={css.active} to='/contactus'>Contact</NavLink>

            </div>
            <div className={css.header_search}>
                <div className={css.header_search_content}>
                    <input autoFocus={true} type="text" placeholder='Searching for anything'/>
                    <img src={icon} alt=""/>
                </div>
                <div className={css.header_search_contact}>
                    <NavLink activeClassName={css.active} to='/contactus'>Contact</NavLink>
                </div>
            </div>
            <div className={css.header_burger} onClick={() => {
                isBurgerOpen
                    ? toggleBurger(false)
                    : toggleBurger(true)
            }}>
                <span className={[css.header_burger_line1, isBurgerOpen && css.header_cross_line1].join(' ')}> </span>
                <span className={[css.header_burger_line3, isBurgerOpen && css.header_cross_line2].join(' ')}> </span>
                <span className={[css.header_burger_line2, isBurgerOpen && css.header_cross_line3].join(' ')}> </span>
            </div>
            <span className={isBurgerOpen ? css.header_blur_on : css.header_blur_off}> </span>
        </header>


    )
}
export default Header