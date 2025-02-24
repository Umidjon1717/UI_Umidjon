import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import Snowfall from "react-snowfall"; 
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Snowfall
          snowflakeCount={20}
          style={{

            width: "100vw",
            height: "100vh",
            zIndex: -1, 
          }}
        />
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
