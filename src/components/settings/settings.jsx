import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./settings.css";

const settings = () => {
  return (
    <div>
      <div className="card card-style mt-3">
        <div className="content mb-0">
          <h6 className="font-700 mb-n1 color-highlight">Manage your</h6>
          <h1 className="pb-2">Profile Details</h1>

          <div className="form-custom form-label form-icon mb-3">
            <i className="bi bi-person-circle font-14"></i>
            <input
              type="text"
              className="form-control rounded-xs"
              id="c1"
              placeholder="Karla Black"
            />
            <label
              htmlFor="c1"
              className="color-theme form-label-always-active font-10 opacity-50"
            >
              Name
            </label>
            <span>(required)</span>
          </div>
          <div className="form-custom form-label form-icon mb-3">
            <i className="bi bi-at font-16"></i>
            <input
              type="text"
              className="form-control rounded-xs"
              id="c1"
              placeholder="name@domain.com"
            />
            <label
              htmlFor="c1"
              className="color-theme form-label-always-active font-10 opacity-50"
            >
              Email
            </label>
            <span>(required)</span>
          </div>
          <div className="form-custom form-label form-icon mb-3">
            <i className="bi bi-at font-16"></i>
            <input
              type="text"
              className="form-control rounded-xs"
              id="c1"
              placeholder="+1 234 567 8901"
            />
            <label
              htmlFor="c1"
              className="color-theme form-label-always-active font-10 opacity-50"
            >
              Phone
            </label>
            <span>(required)</span>
          </div>
          <div className="form-custom form-label form-icon mb-3">
            <i className="bi bi-at font-16"></i>
            <input
              type="text"
              className="form-control rounded-xs"
              id="c1"
              placeholder="1 Apple Lane, California"
            />
            <label
              htmlFor="c1"
              className="color-theme form-label-always-active font-10 opacity-50"
            >
              Address
            </label>
            <span>(required)</span>
          </div>
          <div className="form-custom form-label form-icon mb-3">
            <i className="bi bi-at font-16"></i>
            <input
              type="text"
              className="form-control rounded-xs"
              id="c1"
              placeholder="********"
            />
            <label
              htmlFor="c1"
              className="color-theme form-label-always-active font-10 opacity-50"
            >
              Password
            </label>
            <span>(required)</span>
          </div>
        </div>
      </div>
      <div className="card card-style">
        <div className="content mb-2">
          <h6 className="font-700 mb-n1 color-highlight">Manage your</h6>
          <h1 className="pb-2">Preferences</h1>
          <p>Set your preferences here.</p>
          <a href="#" className="d-flex pb-2" data-trigger-switch="switch-4a">
            <div className="align-self-center">
              <h6 className="mb-0 font-12">Notifications</h6>
            </div>
            <div className="ms-auto align-self-center">
              <div className="form-switch ios-switch switch-green switch-s">
                <input
                  type="checkbox"
                  className="ios-input"
                  id="switch-4a"
                  defaultChecked
                />
                <label
                  className="custom-control-label"
                  htmlFor="switch-4a"
                ></label>
              </div>
            </div>
          </a>
          <a href="#" className="d-flex pb-2" data-trigger-switch="switch-4b">
            <div className="align-self-center">
              <h6 className="mb-0 font-12">Online</h6>
            </div>
            <div className="ms-auto align-self-center">
              <div className="form-switch ios-switch switch-green switch-s">
                <input
                  type="checkbox"
                  className="ios-input"
                  id="switch-4b"
                  defaultChecked
                />
                <label
                  className="custom-control-label"
                  htmlFor="switch-4b"
                ></label>
              </div>
            </div>
          </a>
        </div>
      </div>
      <button className="btn subx rounded-sm btn-m gradient-green text-uppercase  btn-full shadow-bg shadow-bg-s">
        Update
      </button>
      <br />
      <br />
      <br />
      <Footer page="/settings" />
    </div>
  );
};

export default settings;
