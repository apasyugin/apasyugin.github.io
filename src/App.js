import logo from './logo.svg';
import './App.css';
import React from "react";
import AboutPage from "./pages/AboutPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
    return (
        <Router>
            <div className='row'>
                <div className="Menu-list">
                    <h2>Artem Pasyugin notes</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About me</Link>
                        </li>
                    </ul>

                    <hr/>

                    <h2>Tag list</h2>
                    <ul>
                        <li>
                            <Link to="/android">Android</Link>
                        </li>
                        <li>
                            <Link to="/ansible">Ansible</Link>
                        </li>
                        <li>
                            <Link to="/concurrency">Cuncurrency</Link>
                        </li>
                        <li>
                            <Link to="/devops">Devops</Link>
                        </li>
                        <li>
                            <Link to="/docker">Docker</Link>
                        </li>
                        <li>
                            <Link to="/java">Java</Link>
                        </li>
                        <li>
                            <Link to="/linux">Linux</Link>
                        </li>
                        <li>
                            <Link to="/project-management">Project management</Link>
                        </li>
                    </ul>
                </div>
                <div className='column'>
                    {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <AppPage page={<AboutPage name="Boss"/>}/>
                        </Route>
                        <Route path="/android">
                            <Page text="Android"/>
                        </Route>
                        <Route path="/ansible">
                            <Page text="Ansible"/>
                        </Route>
                        <Route path="/concurrency">
                            <Page text="Concurrency"/>
                        </Route>
                        <Route path="/devops">
                            <Page text="Devops"/>
                        </Route>
                        <Route path="/docker">
                            <Page text="Docker"/>
                        </Route>
                        <Route path="/java">
                            <Page text="Java"/>
                        </Route>
                        <Route path="/linux">
                            <Page text="Linux"/>
                        </Route>
                        <Route path="/project-management">
                            <Page text="Project management"/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Time to build empire!
                </p>
            </header>
        </div>
    );
}

function Page(props) {
    return (
        <div className="page App-header">
            <h2>{props.text}</h2>
        </div>
    );
}


function AppPage(props) {
    return (
        <div className="page App-header">
            <h2>{props.page}</h2>
        </div>
    );
}


