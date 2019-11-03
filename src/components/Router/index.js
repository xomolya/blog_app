import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Favorite from '../pages/Favorite';
import Posts from '../pages/Posts';

export default () => {
   return ( <Switch>
        <Route path="/" exact component={Home} />
         <Route path="/Favorite" component={Favorite} />
         <Route path="/Posts" component={Posts} />
    </Switch>
   )
}

