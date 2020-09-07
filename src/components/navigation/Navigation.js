import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, NotFoundScreen } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import {Messages} from '../../redux/reducers/Messages'
import {Search} from '../../screens/Search';

//added the link to the MessageFeed and Search
export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username"
        component={ProfileScreen}
      />
    
      <ConnectedRoute
      exact
      isProtected
      path="/messagefeed"
      component{...Messages}
      />
      <ConnectedRoute
      exact
      isProtected
      path="/Search"
      component={Search}
       />
        <ConnectedRoute
        exact
        path="/signup"
        component={Signup}
      />
       <ConnectedRoute
        exact
        isProtected
        path="/messagefeed"
        component={Messages}
      />



      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
