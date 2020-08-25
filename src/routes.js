import {BrowserRouter , Switch, Route} from 'react-router-dom';
import Main from './pages/Main';
import Repository from './pages/Repository';
import React from 'react';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/repository" component={Repository}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
