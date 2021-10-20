import React, { useEffect } from "react";
import Main from "./blogs/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "./blogs/Nav";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "./redux/authAction";
import "./con.css";
import Profile from "./blogs/content/Profile";
import Fullinfo from "./blogs/content/Fullinfo";
import Uploadpost from "./blogs/post/Uploadpost";
import Singlepost from "./blogs/post/Singlepost";
import Alluser from "./blogs/content/Alluser";
import Alluserinfo from "./blogs/content/Alluserinfo";
import Allusername from "./blogs/content/Allusername";
import UserLi from "./blogs/content/UserLi"
import MainContent from "./blogs/content/MainContent";
const App = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.login);
  const { theme } = useSelector((state) => state);
  // const { auth } = useSelector((state) => state);
  // console.log(userData.token)
  

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <Router>
      <Nav />
      <div className={`con ${theme.side ? "inv" : ""}`}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            {!userData.token ? <Login /> : <Redirect to="/" />}
          </Route>
          <Route path="/register">
            {!userData.token ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path="/upload">
            <Uploadpost />
          </Route>
          <Route path="/mypost">
            <MainContent />
          </Route>
          <Route path="/alluser">
            <Alluser />
          </Route>
          <Route path="/mylikedpost">
            <UserLi/>
          </Route>
          <Route path="/user_info/:username">
            <Profile />
          </Route>
          <Route path="/selfprofile/:id">
            <Fullinfo />
          </Route>
          <Route path="/user_post/:id">
            <Singlepost />
          </Route>
          <Route path="/user/:username">
            <Alluserinfo />
          </Route>
          <Route path="/user_xin/:username">
            <Allusername />
          </Route>

          <Route
            path="/mysite"
            render={() => (window.location = "https://www.bbirdsy.xyz/")}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
