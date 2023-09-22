import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
import Logo from "../../Assets/image/logo.png"
import classes from "./style.module.css"

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                    <a className="navbar-brand" href="#"><img src={Logo} className= {classes.logo}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className='nav-iteam'>
                                <Link to="/" className='nav-link'>Trang chủ</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className='nav-iteam'>
                                <Link to="/signup" className='nav-link'>Đăng ký</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className='nav-iteam'>
                                <Link to="/signin" className='nav-link'>Đăng nhập</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}
