import { Fragment } from "react";
import "./ErrorPage404.css";
import { Link } from "react-router-dom";

function ErrorPage404() {
    return (
        <Fragment>
            <div className="error-page-container">
                <h2 className="header">4😟4</h2>
                <p className="info">Page Not Found :(</p>
                <p className="text">The Page You were Looking for doesn't Exists</p>
                <p className="asterix">*</p>
                <p className="asterix">*</p>
                <p className="asterix">*</p>
                <p className="asterix">*</p>
                <p className="asterix">*</p>
                <p className="text">Let's Get You Back</p>
                <p className="asterix">*</p>
                <p className="asterix">*</p>
                <p className="last-asterix">*</p>
                <Link className="button" href="/">BACK TO MAIN PAGE</Link>
            </div>
        </Fragment>
    );
}

export default ErrorPage404;