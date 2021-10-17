import {useEffect, useState} from "react";
import css from './preroll.module.css'

const Preroll = () => {

    let [isPreloll, togglePreloll] = useState(false)

    useEffect(() => {
        togglePreloll(true)
        setTimeout(() => {
                togglePreloll(false)
            }, 700
        )
    }, [])

    return (
        <>
            {
                isPreloll && <div className={css.preroll}>
                    <span></span>
                </div>
            }
        </>
    )

}
export default Preroll