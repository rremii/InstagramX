import './App.sass';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import AboutPage from "./components/AboutPage/AboutPage";
import MainPage from "./components/mainPage/MainPage.jsx";
import Footer from "./components/footer/Footer";
import useDimensions from "react-cool-dimensions";
import {useInView} from "react-intersection-observer";
import ArrowToTop from "./components/common/arrowToTop/ArrowToTop";
import {useEffect, useState} from "react";

function App() {

    const {observe, unobserve, width, height} = useDimensions({
        useBorderBoxSize: true,
    });
    const {ref, inView, entry} = useInView({
        threshold: 0,
    });


    let aboutPageOffsetY = entry?.target?.childNodes[0]?.childNodes[1]?.childNodes[3]?.offsetTop

    const moveTo = (page) => {
        if (window.innerWidth > 500) return
        if (page === 'mainpage') window.scrollTo(0, 0)
        if (page === 'aboutInstagramX') window.scrollTo(0, aboutPageOffsetY + 2)
    }


    return (
        <BrowserRouter>
            <div ref={ref} className='mainWrapper'>


                {window.innerWidth >= 500 &&
                <div className="App">
                    <Header moveTo={moveTo}/>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/mainPage'}/>}/>
                        <Route path='/mainPage' render={() => <main><MainPage moveTo={moveTo}/>
                        </main>}/>
                        <Route path='/aboutInstagramX' render={() => <main><AboutPage moveTo={moveTo}/></main>}/>
                        <Route path='*' render={() => <div className={'NOTFOUND'}>404 NOT FOUND</div>}/>
                    </Switch>
                    <footer>
                        <Footer/>
                    </footer>
                </div>}


                {window.innerWidth < 500 &&
                <div className="App">
                    <Route exact path='/' render={() => <Redirect to={'/mainPage'}/>}/>

                    <Header moveTo={moveTo}/>
                    <main>
                        <MainPage moveTo={moveTo}/>

                        <AboutPage moveTo={moveTo}/>
                    </main>
                    <footer>
                        <Footer/>
                    </footer>
                </div>}
                {window.innerWidth < 500 && <ArrowToTop moveTo={moveTo}/>}

            </div>

        </BrowserRouter>

    );
}

export default App;
