import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default class Listing extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            slNo: 0
        };
    }

    categoryDelete(category2) {
        console.log(category2);
        swal({
            title: "Are you sure?",
            text: "You want to delete this Category?",
            icon: "warning",
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                axios
                    .delete("http://lreact.test/category/d/" + category2.id)
                    .then(res => {
                        swal({
                            title: "Done!",
                            text: "user is deleted",
                            icon: "success",
                            button: true
                        });
                        let categories = this.state.categories;
                        let index = categories.findIndex(
                            category => category.id === category2.id
                        );
                        categories.splice(index, 1);
                        this.setState({
                            categories: categories
                        });
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
        });
    }

    componentDidMount() {
        axios.get("http://lreact.test/category").then(response => {
            this.setState({ categories: response.data });
            console.log(response.data);
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">SNo</th>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Created at</th>
                                <th scope="col">Updated at</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categories.map(category => {
                                return (
                                    <tr>
                                        <th scope="row">{category.id}</th>
                                        <td>{category.name}</td>
                                        <td>
                                            {category.active == 1
                                                ? "Active"
                                                : "Draft"}
                                        </td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td>
                                        <td>
                                            <span
                                                onClick={this.categoryDelete.bind(
                                                    this,
                                                    category
                                                )}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
