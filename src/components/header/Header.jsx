import {NavLink} from "react-router-dom";
import icon from "../../images/outline_search_black_24dp.png";
import React from "react";
import css from './Header.module.css'

const Header = (props) => {
    console.log(window)
    let links = document.querySelector("#navlinkHeader")

    console.log(links)
    return (
        <div className={css.wrapper}>
            <header className={css.header}>
                <NavLink activeClassName={css.active} to='/mainpage'>
                    <button>instagramX</button>

                </NavLink>

                <NavLink activeClassName={css.active} to='buyMails'>
                    <button>
                        Buy Mails
                    </button>
                </NavLink>

                <NavLink activeClassName={css.active} to='buyServies'>
                    <button>
                        Buy Servies
                    </button>
                </NavLink>

                <NavLink activeClassName={css.active} to='/aboutInstagramX'>
                    <button>about instagramX</button>
                </NavLink>
                <div className={css.wrap}>
                    <NavLink className={[css.navlinkHeader, css.right].join(' ')} to='#'>Contact</NavLink>
                    <img src={icon} className={[css.navlinkHeader, css.right].join(' ')} alt=""/>
                </div>
            </header>
        </div>

    )
}
export default Header