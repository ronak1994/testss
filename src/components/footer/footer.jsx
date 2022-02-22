import React from "react";
import { Link } from "react-router-dom";
import { App } from "@capacitor/app";

const footer = (props) => {
  App.addListener("backButton", (data) => {
    window.history.back();
  });

  return (
    <div id="footer-bar" className="footer-bar footer-bar-detached">
      <Link className={props.page == "/chats" ? "active-nav" : ""} to="/chats">
        <i className="bi bi-chat font-20"></i>
        <span>Chats</span>
      </Link>

      <Link
        className={props.page == "/contacts" ? "active-nav" : ""}
        to="/contacts"
      >
        <i className="bi bi-person font-20"></i>
        <span>Contacts</span>
      </Link>

      <Link
        className={props.page == "/settings" ? "active-nav" : ""}
        to="/settings"
      >
        <i className="bi bi-gear font-20"></i>
        <span>Settings</span>
      </Link>
    </div>
  );
};

export default footer;
