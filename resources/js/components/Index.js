import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />

                <Footer />
            </div>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
