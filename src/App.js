import './App.css';
import MainPage from "./components/mainPage/MainPage";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import AboutPage from "./components/AboutPage/AboutPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={'/mainPage'}/>}/>
                    <Route path='/mainPage' render={() => <MainPage/>}/>
                    <Route path='/aboutInstagramX' render={() => <AboutPage/>}/>
                    <Route path='*' render={() => <div className={'NOTFOUND'}>404 NOT FOUND</div>}/>
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
