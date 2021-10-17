import css from "./AboutPage.module.css";
import Preroll from "../common/preroll/preroll";
import React from "react";

const AboutPage = () => {
    return (
        <>
            <Preroll/>

            <div className={css.wrapper}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <section className={css.top}>
                    <div>
                        <div className={css.text__top}>
                            <h1>
                                Boost Your Instagram Account <br/> With instagramX
                            </h1>
                            <h2>
                                it Takes Few Minutes To Establish Your Reputation in The Market
                            </h2>
                        </div>
                        <div className={css.button__section}>
                            <button>
                                Buy instagram
                                <br/> Followers
                            </button>
                            <button>
                                Buy instagram
                                <br/> Likes
                            </button>
                            <button>
                                Buy instagram
                                <br/> Comments
                            </button>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className={[css.image, css.topImg].join(" ")}/>
                    </div>
                </section>

                <section className={css.bottom_wrapper}>
                    {/* fucking waves */}
                    <svg
                        className={css.wave1}
                        viewBox="0 0 1440 400"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 0,400 C 0,400 0,133 0,133 C 84.87948717948717,116.26410256410256 169.75897435897434,99.52820512820513 256,105 C 342.24102564102566,110.47179487179487 429.84358974358975,138.15128205128207 512,154 C 594.1564102564103,169.84871794871793 670.8666666666668,173.86666666666667 749,168 C 827.1333333333332,162.13333333333333 906.6897435897436,146.38205128205126 987,140 C 1067.3102564102564,133.61794871794874 1148.3743589743592,136.6051282051282 1224,137 C 1299.6256410256408,137.3948717948718 1369.8128205128205,135.1974358974359 1440,133 C 1440,133 1440,400 1440,400 Z"
                            stroke="none"
                            strokeWidth="0"
                            opacity="0.5"
                            fill="#fff"
                        ></path>
                        <path
                            d="M 0,400 C 0,400 0,266 0,266 C 99.5871794871795,261.05384615384617 199.174358974359,256.10769230769233 272,247 C 344.825641025641,237.8923076923077 390.8897435897436,224.62307692307692 457,227 C 523.1102564102564,229.37692307692308 609.2666666666667,247.39999999999998 701,254 C 792.7333333333333,260.6 890.0435897435896,255.77692307692308 968,245 C 1045.9564102564104,234.22307692307692 1104.5589743589744,217.49230769230772 1180,220 C 1255.4410256410256,222.50769230769228 1347.7205128205128,244.25384615384615 1440,266 C 1440,266 1440,400 1440,400 Z"
                            stroke="none"
                            strokeWidth="0"
                            fill="#fff"
                        ></path>
                    </svg>
                    {/* fucking waves */}
                </section>
                <section className={css.bottom}>
                    <div className={[css.image, css.botomImg].join(" ")}/>

                    <div>
                        <h1>About instagramX</h1>
                        <h2>
                            We are social media service providers who work to boost your every
                            social connection that you play through Instagram,IGTV and Posts.
                            We implement organic ways to grow your client's engagement on
                            every account
                        </h2>
                    </div>
                </section>
            </div>
        </>
    );
};
export default AboutPage;
