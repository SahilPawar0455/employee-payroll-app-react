import React, { Component } from "react";
import "./Home.css";
import profile1 from "../assets/profile-images/Ellipse -3.png";
import profile2 from "../assets/profile-images/Ellipse -1.png";
import profile3 from "../assets/profile-images/Ellipse -4.png";
import profile4 from "../assets/profile-images/Ellipse -9.png";
import edit from "../assets/icons/create-black-18dp.svg";
import deleteicon from "../assets/icons/delete-black-18dp.svg";
import { withRouter, Link } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";


class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div>
                    <div className="main-content">
                        <div className="header-content employee-header">
                            <div className="emp-detail-text">
                                Employee Details
                            </div>
                            <Link to="/employee" className="add-button">
                                <img src="" alt="" />+ Add User</Link>
                        </div>
                    </div>
                    <div className="table-main">
                        <table id="table-display" className="table">
                            <thead>
                                <tr>
                                    <th>Profile Image</th>
                                    <th>Name</th>
                                    <th>Notes</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Salary</th>
                                    <th>Start Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div >
        );
    }
}
export default withRouter(Home);