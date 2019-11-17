import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Favorite from '../pages/Favorite';
import Posts from '../pages/Posts';
import Post from '../pages/Post';

export default () => {
   return ( <Switch>
        <Route path="/" exact component={Home} />
         <Route path="/Favorite" component={Favorite} />
         <Route path="/Posts" component={Posts} />
         <Route path="/post/:id" component={Post} />
    </Switch>
   )
}

