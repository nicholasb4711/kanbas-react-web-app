import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';
import TopElement from '../TopElement';

function Account() {
    return (
        <div className="col-10">
            <TopElement />  
            <div className="user-title-header">
                Jose Annunziato's Profile
            </div>
            <div className="d-flex">
                <div className="d-flex-col left-content-wrapper list-group">
                    <ul className="list-group wd-account-navigation">
                        <li className="list-group-item">
                            <a href="#">Notifications</a>
                        </li>
                        <li className="list-group-item active">
                            <a href="/Kanbas/Account/Profile/index.html">Profile</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Files</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Settings</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">ePortfolios</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Shared Content</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">The Hub</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Qwickly Course Tools</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Global Announcements</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex-col right-content-wrapper">
                    <div className="d-flex justify-content-between">
                        <i className="fas fa-user-circle user-icon" style={{color: 'lightgray'}}></i>

                        <a href="/Kanbas/Account/Profile/edit.html">
                            <button type="button" className="btn btn-light">
                                <i className="far fa-edit" style={{color: 'black'}}></i>
                                Edit Profile
                            </button>
                        </a>
                    </div>

                    <div className="d-flex-col">
                        <div className="mb-3">
                            <h3>Jose Annunziato</h3>
                        </div>
                        <div className="mb-3">
                            <h3>Contact</h3>
                            No registered services, you can add some on the <a href="#"
                                style={{color:'#D41B2C'}}>settings</a>
                            page.
                        </div>
                        <div className="mb-3">
                            <h3>Biography</h3>
                            Faculty, Software Engineer, AI, Space, and renewables enthusiast.
                        </div>
                        <div className="mb-3">
                            <h3>Links</h3>
                            <a href="https://www.youtube.com/@WebDevTV" style={{color:'#D41B2C'}}>Youtube</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Account;