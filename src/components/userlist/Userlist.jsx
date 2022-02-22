import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../../Service/api";
import "./userList.css";
import Register from "../register/register";


const Userlist = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      const user = token;
      console.log(user);
    }else{
      navigate("/admin", { replace: true });
    }
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);

  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const logout = () =>{
    localStorage.removeItem("token");
    navigate("/admin", { replace: true });
  }
  return (
    <div className="card card-style mb-0 bg-transparent shadow-0 bg-3 mx-0 rounded-0 full-height">
      <div className="card-center">
        <div className="card card-style">
          <div className="content">
            <div className="row">
              <div className="col-sm-6">
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#menu-register"
                  className=" btn btn-m rounded-s gradient-highlight shadow-bg shadow-bg-s px-5 mb-0 mt-2"
                >
                  <i className="bi bi-plus"></i> Add New User
                </button>
              </div>
              <div className="col-sm-6">
                <button onClick={()=>logout()} className="btn btn-m btn-danger rounded-s logout-btn  shadow-bg shadow-bg-s px-5 mb-0 mt-2">
                  Logout
                </button>
              </div>
            </div>
            <br />
            <div className="border border-blue-dark rounded-s overflow-hidden">
              <table className="table color-theme border-blue-dark mb-0">
                <thead className="rounded-s bg-blue-dark border-l">
                  <tr className="color-white">
                    <th scope="col">
                      <h5 className="color-white font-15 mb-0">S.No.</h5>
                    </th>
                    <th scope="col">
                      <h5 className="color-white font-15 mb-0">First Name</h5>
                    </th>
                    <th scope="col">
                      <h5 className="color-white font-15 mb-0">Last Name</h5>
                    </th>
                    <th scope="col">
                      <h5 className="color-white font-15 mb-0">Email</h5>
                    </th>

                    <th scope="col">
                      <h5 className="color-white font-15 mb-0">Actions</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user,index) => {
                    return (
                      <tr key={user._id}>
                        <td>
                          <strong>{index}.</strong>
                        </td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>

                        <td>
                          <button
                            onClick={() => deleteUserData(user._id)}
                            className="btn-danger btn-sm btn "
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Register />
    </div>
  );
};

export default Userlist;
