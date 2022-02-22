import React, {useState} from 'react'
import {addUser} from '../../Service/api';

const intialValue = {
  first_name:"",
  last_name:"",
  email:"",
  password:""
}

const Register = () => {
 const [user, setUser] = useState(intialValue);

 const onValueChange = (e) =>{
  setUser({...user, [e.target.name]:e.target.value});
 
 }

 const addUserDetails = async()=>{
const response = await addUser(user);
console.log(response);
if(response.status == '200'){
  alert('user added successfully');
  window.location.href="/userList";
}else{
  alert('invalid entry');
}

 }
  return (
    <div
      className="offcanvas offcanvas-modal rounded-m offcanvas-detached bg-theme"
      id="menu-register"
    >
      <div className="content register_form">
        <h1 className="font-24 font-800 mb-3">Register New User</h1>
        <div className="row">
          <div className="col-6">
            <div className="form-custom form-label form-border form-icon mb-3 bg-transparent">
              <i className="bi bi-person-circle font-13"></i>
              <input
                type="text"
                className="form-control rounded-xs"
                id="c1"
                placeholder="First Name"
               onChange={(e)=>onValueChange(e)}
                name="first_name"
              />
              <label htmlFor="c1" className="color-theme">
                First Name
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-custom form-label form-border form-icon mb-3 bg-transparent">
              <i className="bi bi-person-circle font-13"></i>
              <input
                type="text"
                className="form-control rounded-xs"
                id="c1"
                placeholder="Last Name"
                onChange={(e)=>onValueChange(e)}
                name="last_name"
              />
              <label htmlFor="c1" className="color-theme">
                Last Name
              </label>
            </div>
          </div>
        </div>

        <div className="form-custom form-label form-border form-icon mb-3 bg-transparent">
          <i className="bi bi-at font-17"></i>
          <input
            type="text"
            className="form-control rounded-xs"
            id="c1"
            placeholder="Email"
            onChange={(e)=>onValueChange(e)}
            name="email"
          />
          <label htmlFor="c1" className="color-theme">
            Email
          </label>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-custom form-label form-border form-icon mb-4 bg-transparent">
              <i className="bi bi-asterisk font-13"></i>
              <input
                type="password"
                className="form-control rounded-xs"
                id="c2"
                placeholder="Password"
                onChange={(e)=>onValueChange(e)}
                name="password"
              />
              <label htmlFor="c2" className="color-theme">
                Password
              </label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-custom form-label form-border form-icon mb-4 bg-transparent">
              <i className="bi bi-asterisk font-13"></i>
              <input
                type="password"
                className="form-control rounded-xs"
                id="c2"
                placeholder="Confrim Password"
                name="confrim_password"
              />
              <label htmlFor="c2" className="color-theme">
                Confrim Password
              </label>
            </div>
          </div>
        </div>

        <button onClick={() => addUserDetails()} className="btn btn-full gradient-blue shadow-bg shadow-bg-s mt-4">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;