import React from "react";

const header = () => {
  return (
    <div className="header-bar header-fixed header-app header-bar-detached">
      <a data-back-button href="#">
        <i className="bi bi-caret-left-fill font-11 color-theme ps-2"></i>
      </a>
      <a href="#" className="header-title color-theme font-13">
        Go Back
      </a>
    </div>
  );
};
export default header;
