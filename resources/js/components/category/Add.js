import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = { categoryName: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ categoryName: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const category = {
            categoryName: this.state.categoryName
        };

        axios
            .post("http://lreact.test/category/store", category)
            .then(res => {
                swal({
                    title: "Category Created Succrssfullys!",
                    text: "user is added to database",
                    icon: "success",
                    button: true
                });
                this.props.history.push("/category");
            })
            .catch(err => {
                swal({
                    title: "Sorry  Some thing wrong!",
                    text: "Category Not Saved",
                    icon: "warning",
                    button: true
                });
            });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>
                                Name:
                                <input
                                    type="text"
                                    value={this.state.categoryName}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </label>
                        </div>
                        <input
                            type="submit"
                            className="btn btn-success"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        );
    }
}
