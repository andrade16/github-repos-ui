import React from "react";
import {Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import RepoScreen from "./components/RepoScreen/RepoScreen";
import CommitsScreen from "./components/CommitsScreen/CommitsScreen";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path={'/'}
                   render={() => {
                       return <Redirect to={'/repo-screen'}/>
                   }}
            />
            <Route path={'/repo-screen'}
                   render={props => (
                       <RepoScreen {...props}/>
                   )}
            />

            <Route path={'/commits/:owner/:name'}
                   render={props => (
                       <CommitsScreen {...props}/>
                   )}
            />

        </Switch>
    </Router>
  );
}

export default App;
