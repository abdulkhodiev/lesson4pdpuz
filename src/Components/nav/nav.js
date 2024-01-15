import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar p-3 shadow p-3 mb-5 bg-body rounded">
                <div className="logo fs-5">
                    <p className="mb-0">Company Name</p>
                </div>
                <div className="links">
                    <a href="/">Features</a>
                    <a href="/">Enterprise</a>
                    <a href="/">Support</a>
                    <a href="/">Pricing</a>
                    <a className="sign" href="/">
                        Sign up
                    </a>
                </div>
            </nav>
        );
    }
}

export default Nav;
