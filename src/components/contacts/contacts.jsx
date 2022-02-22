import React from "react";
import "./contact.css";
import { Link, useLocation } from "react-router-dom";
import Footer from "../footer/footer";
import queryString from "query-string";

const Contact = () => {
  return (
    <div>
      <p className="contact_heading mb-0">
        Hello, {localStorage.getItem("name")}
      </p>
      <div className="card card-style mt-2">
        <div className="content mb-0 mt-2">
          <div className="list-group list-custom list-group-m list-group-flush rounded-xs check-visited">
            <Link
              to={`/chat?room=room1&name=${localStorage.getItem("name")}`}
              className="list-group-item"
            >
              <i className="has-bg bi bg-green-dark bi-person"></i>
              <div>Test user 1 </div>
              <span className="online_label">
                <font>online</font>
                &nbsp;<div className="green_dot"></div>
              </span>
            </Link>
            <Link
              to={`/chat?room=room1&name=${localStorage.getItem("name")}`}
              className="list-group-item"
            >
              <i className="has-bg bi bg-green-dark bi-person"></i>
              <div>Test user 2 </div>
              <span className="online_label">
                <font>online</font>
                &nbsp;<div className="green_dot"></div>
              </span>
            </Link>

            <Link
              to={`/chat?room=room1&name=${localStorage.getItem("name")}`}
              className="list-group-item"
            >
              <i className="has-bg bi bg-green-dark bi-person"></i>
              <div>Test user 3 </div>
              <span className="online_label">
                <font>online</font>
                &nbsp;<div className="green_dot"></div>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer page="/contacts" />
    </div>
  );
};
export default Contact;
