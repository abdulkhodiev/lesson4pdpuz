import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Card from "./Components/card/card.js";
import Nav from "./Components/nav/nav.js";
import Footer from "./Components/footer/footer.js";

class App extends Component {
    render() {
        const datasets = [
            {
                title: "Free",
                price: "$0",
                description: "10 users included\n2 GB of storage",
                buttonText: "Sign up for free",
            },

            {
                title: "Pro",
                price: "$15",
                description: "20 users included\n10 GB of storage",
                buttonText: "Get started",
            },

            {
                title: "Enterprise",
                price: "$29",
                description: "30 users included\n15 GB of storage",
                buttonText: "Contact us",
            },
        ];

        const links = [
            {
                text: "Features",
                url: "#",
            },
            {
                text: "Enterprise",
                url: "#",
            },
            {
                text: "Support",
                url: "#",
            },
            {
                text: "Pricing",
                url: "#",
            },
        ];

        const footerLinks = [
            {
                title: "Features",
                links: [
                    "Cool stuff",
                    "Random feature",
                    "Team feature",
                    "Stuff for developers",
                    "Another one",
                    "Last time",
                ],
            },
            {
                title: "Resources",
                links: [
                    "Resource",
                    "Resource name",
                    "Another resource",
                    "Final resource",
                ],
            },
            {
                title: "About",
                links: ["Team", "Locations", "Privacy", "Terms"],
            },
        ];

        return (
            <div>
                <Nav links={links} />
                <header className="text-center">
                    <h1>Pricing</h1>
                    <p className="w-75 m-auto p-4 fs-5 text-muted">
                        Quickly build an effective pricing table for your
                        potential customers with this Bootstrap example. It's
                        built with default Bootstrap components and utilities
                        with little customization.
                    </p>
                    <div className="container w-75 m-auto">
                        <div className="row">
                            {datasets.map((data, index) => (
                                <Card
                                    key={index}
                                    title={data.title}
                                    price={data.price}
                                    description={data.description}
                                    buttonText={data.buttonText}
                                />
                            ))}
                        </div>
                    </div>
                </header>
                <footer className="w-75 m-auto d-flex justify-content-between my-5 py-4 border-top">
                    <div className="footer-logo">
                        <h3>B</h3>
                        <p>© 2017-2018</p>
                    </div>
                    {footerLinks.map((data, index) => (
                        <Footer
                            key={index}
                            title={data.title}
                            links={data.links}
                        />
                    ))}
                </footer>
            </div>
        );
    }
}

export default App;
