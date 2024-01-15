import React, { Component } from "react";
import cartCSS from "./card.css";

class Card extends Component {
    render() {
        const { title, price, description, buttonText } = this.props;

        return (
            <div className="col-lg-4 col-md-2 col-sm-2">
                <div className="card text-center">
                    <h3 className="card-header text-center">{title}</h3>
                    <div className="card-body">
                        <h5 className="card-title mb-0">
                            <b className="fs-3">{price}</b>{" "}
                            <span className="text-muted">/ mo</span>
                        </h5>
                        <p className="card-text w-75 m-auto p-3">
                            {description}
                        </p>
                        <a
                            href="/"
                            className="btn border-2 text-primary border-primary fw-bold">
                            {buttonText}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
