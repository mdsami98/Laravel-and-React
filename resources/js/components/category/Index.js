import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Listing from "./Listing";
import Add from "./Add";
export default class Index extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="button">
                                <Link
                                    to="/category"
                                    className="btn btn-success"
                                >
                                    List Of Category
                                </Link>
                                <Link
                                    to="/category/add"
                                    className="btn btn-success"
                                >
                                    Add Category
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Route exact path="/category" component={Listing} />
                    <Route exact path="/category/add" component={Add} />
                </div>
            </Router>
        );
    }
}
