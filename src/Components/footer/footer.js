import React, { Component } from "react";

class Footer extends Component {
    render() {
        const { title, links } = this.props;

        return (
            <div className="footer-links1 d-flex flex-column">
                <p className="fw-bold">{title}</p>
                {links.map((link, index) => (
                    <a key={index} href="/">
                        {link}
                    </a>
                ))}
            </div>
        );
    }
}

export default Footer;
