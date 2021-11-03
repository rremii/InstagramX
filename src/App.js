import './App.sass';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import AboutPage from "./components/AboutPage/AboutPage";
import MainPage from "./components/mainPage/MainPage.jsx";
import Footer from "./components/footer/Footer";
import useDimensions from "react-cool-dimensions";
import {useInView} from "react-intersection-observer";
import ArrowToTop from "./components/common/arrowToTop/ArrowToTop";

function App() {

    const {observe, unobserve, width, height} = useDimensions({
        useBorderBoxSize: true,
    });
    // const {ref, inView, entry} = useInView({
    //     threshold: 0,
    // });
    const {ref, inView, entry} = useInView({
        threshold: 0,
    });

    let MoveTo = () => {
        let page
        if (window.location.pathname === '/aboutInstagramX') page = 1
        if (window.location.pathname === '/mainpage') page = 0
        window.scrollTo(0, window.innerHeight * page)
    }


    // console.log(inView, entry)
    {
    }
    return (
        <BrowserRouter>
            <div className='mainWrapper' ref={observe}>


                {width >= 500 &&
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/mainPage'}/>}/>
                        <Route path='/mainPage' render={() => <main><MainPage/>
                        </main>}/>
                        <Route path='/aboutInstagramX' render={() => <main><AboutPage/></main>}/>
                        <Route path='*' render={() => <div className={'NOTFOUND'}>404 NOT FOUND</div>}/>
                    </Switch>
                    <footer>
                        <Footer/>
                    </footer>
                </div>}


                {width < 500 &&
                <div className="App">
                    <Route path='/' render={() => <Redirect to={'/mainPage'}/>}/>

                    <Header/>
                    <main ref={ref}>
                        <MainPage/>

                        <AboutPage/>
                    </main>
                    <footer>
                        <Footer/>
                    </footer>
                    <Route path='/' render={MoveTo}/>
                </div>}
                {width < 500 && <ArrowToTop />}

            </div>

        </BrowserRouter>

    );
}

export default App;
