import React from "react";
// import { BrowserRouter, Routes, Route, withRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//Layouts
import LayoutAuth from "../containers/layouts/auth/layout-auth";
import LayoutPublic from "../containers/layouts/public/layout-public";
import LayoutDashboard from "../containers/layouts/dashboard/layout-dashboard";

// Public Views
import About from "../containers/views/public/About";
import Home from "../containers/views/public/Home";
import Contact from "../containers/views/public/Contact";
import NotFound from "../containers/views/public/NotFound";

// Auth Views
import Login from "../containers/views/auth/Login";
import Register from "../containers/views/auth/Register";
import ForgotPassword from "../containers/views/auth/ForgotPassword";

// Dashboard Views
// import ProtectedRoute from './ProtectedRoute';
// import Profile from '../containers/views/dashboard/Profile'
// import Settings from '../containers/views/dashboard/Settings';
// import Messages from '../containers/views/dashboard/Messages';

function Navigation({ location }) {
  return (
    <>
      {/* <BrowserRouter>
        <Routes location={location}>
          <Route path="/auth/:path?" exact>
            <LayoutAuth>
              <Routes>
                <Route path="/auth" exact element={<Login />} />
                <Route path="/auth/login" exact element={<Login />} />
                <Route path="/auth/register" exact element={<Register />} />
                <Route
                  path="/auth/forgot-password"
                  exact
                  element={<ForgotPassword />}
                />
              </Routes>
            </LayoutAuth>
          </Route>

          <Route path="/dash/:path?">
            <LayoutDashboard>
              <Routes>
                <ProtectedRoute path="/dash" exact element={<Profile />} />
                <ProtectedRoute path="/dash/settings" element={<Settings />} />
                <ProtectedRoute path="/dash/profile" element={<Profile />} />
                <ProtectedRoute path="/dash/messages" element={<Messages />} />
              </Routes>
            </LayoutDashboard>
          </Route>

          <LayoutPublic>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route element={<NotFound />} exact path="/*" />
            </Routes>
          </LayoutPublic>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPublic />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* <Route path="/auth/:path?" element={<LayoutAuth />}>
              <Route path="/auth" exact element={<Login />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          </Route> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default Navigation;
