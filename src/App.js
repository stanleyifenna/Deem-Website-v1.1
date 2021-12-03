import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from "./pages/HomePage";
import "antd/dist/antd.css";
import { FaAngleUp } from "react-icons/fa";
import { BackTop } from "antd";


const style = {
  height: 40,
  width: 40,
  lineHeight: "45px",
  borderRadius: 4,
  backgroundColor: "#ffffff",
  color: "#1A71FF",
  textAlign: "center",
  fontSize: 20,
  border: "0.5px solid #1A71FF",
};

const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Pricing = lazy(() => import("./pages/Pricing"));
const TermsofService = lazy(() => import("./pages/TermsofService"));
const SupportCenter = lazy(() => import("./pages/SupportCenter"));
const Careers = lazy(() => import("./pages/Careers"));
const Solutions = lazy(() => import("./pages/Solutions/"));
const Faq = lazy(() => import("./pages/Faq"));
const EmailPage = lazy(() => import("./EmailPage"));
const Thanks = lazy(() => import("./Thanks"));







function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Router>
      <GlobalStyle />
      <Switch>    
      <Route path="/" exact component={Home} />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/Solutions" exact component={Solutions} />
          <Route path="/Careers" exact component={Careers} />
          <Route path="/Pricing" exact component={Pricing} />
          <Route path="/Faq" exact component={Faq} />
          <Route path="/SupportCenter" exact component={SupportCenter} />
          <Route path="/Privacy" exact component={Privacy} />
          <Route path="/TermsofService" exact component={TermsofService} />
          <Route path="/About" exact component={About} />
          <Route path="/Thanks" exact component={Thanks} />
         <Route path="/EmailPage" exact component={EmailPage} />
        </Suspense> 
   
      </Switch>
    </Router>

    <BackTop>
        <div style={style}>
          <div className="">{<FaAngleUp />}</div>
        </div>
      </BackTop>
    </>
  );
}

export default App;
