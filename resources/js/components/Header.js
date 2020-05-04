import React, { Component } from "react";
import "../css/header.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Category from "../components/category/Index";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="site-menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="mainmenu">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>

                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/category">Category</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route
                                exact
                                path="/category"
                                component={Category}
                            />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
