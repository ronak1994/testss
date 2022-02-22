import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "./icon.png";
import "./login.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="outerWrap">
      <div className="card card-style mb-0 bg-transparent shadow-0 bg-3 mx-0 rounded-0 full-height">
        <div className="card-center">
          <div className="card card-style">
            <img src={icon} alt="" className="login_icon" />
            <div className="content">
              <h1 className="text-center font-800 font-30 mb-2">Sign In</h1>
              <p className="text-center font-13 mt-n2 mb-3">
                Enter your Credentials
              </p>
              <div className="form-custom form-label form-icon mb-3">
                <i className="bi bi-person-circle font-14"></i>
                <input
                  type="text"
                  className="form-control rounded-xs"
                  id="c1"
                  placeholder="Username"
                  onChange={(event) => setName(event.target.value)}
                />

                <span>(required)</span>
              </div>
              <div className="form-custom form-label form-icon mb-3">
                <i className="bi bi-asterisk font-12"></i>
                <input
                  type="password"
                  className="form-control rounded-xs"
                  id="c2"
                  placeholder="Password"
                  onChange={(event) => setRoom(event.target.value)}
                />

                <span>(required)</span>
              </div>
              <Link
                onClick={(event) =>
                  !name || !room
                    ? event.preventDefault()
                    : localStorage.setItem("name", name)
                }
                to={`/contacts?name=${name}`}
                className="btn rounded-sm btn-m gradient-green text-uppercase mt-4 mb-3 btn-full shadow-bg shadow-bg-s"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
