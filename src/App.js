import './App.sass';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import AboutPage from "./components/AboutPage/AboutPage";
import MainPage from "./components/mainPage/MainPage.jsx";
import Footer from "./components/footer/Footer";
import useDimensions from "react-cool-dimensions";

function App() {

    // const {observe, unobserve, width, height} = useDimensions({
    //     useBorderBoxSize: true,
    // });

    return (
        <BrowserRouter>
            {/*<div className='mainWrapper' ref={observe}>*/}
                <div className="App">

                    <header>
                        <Header/>
                    </header>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/mainPage'}/>}/>
                        <Route path='/mainPage' render={() => <main><MainPage />
                        </main>}/>
                        <Route path='/aboutInstagramX' render={() => <main><AboutPage/></main>}/>
                        <Route path='*' render={() => <div className={'NOTFOUND'}>404 NOT FOUND</div>}/>
                    </Switch>
                    <footer>
                        <Footer/>
                    </footer>

                </div>

            {/*</div>*/}

        </BrowserRouter>

    );
}

export default App;
