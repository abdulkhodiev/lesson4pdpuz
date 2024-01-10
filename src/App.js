import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div>
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
            <header className="text-center">
                <h1>Pricing</h1>
                <p className="w-75 m-auto p-4 fs-5 text-muted">
                    Quickly build an effective pricing table for your potential
                    customers with this Bootstrap example. It's built with
                    default Bootstrap components and utilities with little
                    customization.
                </p>
                <div className="container w-75 m-auto">
                    <div className="row">
                        <div className="col-lg-4 col-md-2 col-sm-2">
                            <div className="card text-center">
                                <h3 className="card-header text-center">
                                    Free
                                </h3>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">
                                        <b className="fs-3">$0</b>{" "}
                                        <span className="text-muted">/ mo</span>
                                    </h5>
                                    <p className="card-text w-75 m-auto p-3">
                                        10 users included 2 GB of storage Email
                                        support Help center access
                                    </p>
                                    <a
                                        href="/"
                                        className="btn border-2 text-primary border-primary fw-bold">
                                        Sign up for free
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-2 col-sm-2">
                            <div className="card text-center">
                                <h3 className="card-header text-center">Pro</h3>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">
                                        <b className="fs-3">$15</b>{" "}
                                        <span className="text-muted">/ mo</span>
                                    </h5>
                                    <p className="card-text w-75 m-auto p-3">
                                        10 users included 2 GB of storage Email
                                        support Help center access
                                    </p>
                                    <a
                                        href="/"
                                        className="btn btn-primary fw-bold">
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-2 col-sm-2">
                            <div className="card text-center">
                                <h3 className="card-header text-center">
                                    Enterprise
                                </h3>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">
                                        <b className="fs-3">$29</b>{" "}
                                        <span className="text-muted">/ mo</span>
                                    </h5>
                                    <p className="card-text w-75 m-auto p-3">
                                        10 users included 2 GB of storage Email
                                        support Help center access
                                    </p>
                                    <a
                                        href="/"
                                        className="btn btn-primary fw-bold">
                                        Contact us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <footer className="w-75 m-auto d-flex justify-content-between my-5 py-4 border-top">
                <div className="footer-logo">
                    <h3>B</h3>
                    <p>© 2017-2018</p>
                </div>
                <div className="footer-links1 d-flex flex-column">
                    <p className="fw-bold">Features</p>
                    <a href="/">Cool stuff</a>
                    <a href="/">Cool stuff</a>
                    <a href="/">Cool stuff</a>
                    <a href="/">Cool stuff</a>
                    <a href="/">Cool stuff</a>
                    <a href="/">Cool stuff</a>
                </div>
                <div className="footer-links1 d-flex flex-column">
                    <p className="fw-bold">Resources</p>
                    <a href="/">Cool stuff</a>
                    <a href="/">Cool stuff</a>
                    <a href="/">Cool stuff</a>
                    <a href="/">Cool stuff</a>
                </div>
                <div className="footer-links1 d-flex flex-column">
                    <p className="fw-bold">About</p>
                    <a href="/">Cool stuff</a>
                    <a href="/">Cool stuff</a>
                    <a href="/">Cool stuff</a>
                    <a href="/">Cool stuff</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
