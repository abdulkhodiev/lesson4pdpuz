import React, { Component } from "react";

class Nav extends Component {
    render() {
        const { links } = this.props;

        return (
            <nav className="navbar p-3 shadow p-3 mb-5 bg-body rounded">
                <div className="logo fs-5">
                    <p className="mb-0">Company Name</p>
                </div>
                <div className="links">
                    <ul className="list-unstyled d-flex mb-0">
                        {links.map((link, index) => (
                            <li key={index} className="me-3">
                                <a
                                    href={link.url}
                                    className="text-decoration-none">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#"
                                className="text-decoration-none text-primary border border-primary rounded p-2">
                                Sign In
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
