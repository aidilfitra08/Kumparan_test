import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// User CRUD

import UserDetailContainer from "./containers/UserDetailContainer";
import UserContainer from "./containers/UserContainer";

// City CRUD
import PostContainer from "./containers/PostContainer";
import PostDetailContainer from "./containers/PostDetailContainer";



export default class App extends Component {
  render() {
    return (
      <div>
        
        
        <BrowserRouter>
          <Switch>
          {/* <Route path="/" exact component={LoginContainer} /> */}
          
            <div>
              <NavbarComponent />
              <JumbotronComponent />
              {/* {console.log(isLogin)} */}
              <Route path="/users" exact component={UserContainer} />
              <Route path="/users/:id" exact component={UserDetailContainer} />


              <Route path="/" exact component={PostContainer} />
              <Route path="/posts" exact component={PostContainer} />
              <Route path="/posts/:id" exact component={PostDetailContainer} />

            </div>
          </Switch>
            
          
          
        </BrowserRouter>
      </div>
    );
  }
}
