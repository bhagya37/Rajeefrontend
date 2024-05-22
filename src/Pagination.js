import axios from "axios";
import React, { useState, useEffect } from "react";
import './Pagination.css'

function Pagination() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(-1);
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = currentPage * recordsPerPage - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(users.length / recordsPerPage);

  useEffect(() => {
    axios
      .get("http://3.111.37.163:8080/epankaj/v.0/users/getall")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((res) => {
        console.log("err");
      });
  }, []);

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://3.111.37.163:8080/epankaj/v.0/users/saveUserbyAdmin", {
        name: name,
        email: email,
      })
      .then((res) => {
        console.log(res);
        setUsers([...users, res.data]);
        setName("");
        setEmail("");
        setSuccessMessage("User Inserted successfully!");
        setTimeout(() => setSuccessMessage(""), 2000); 
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    axios
      .get(`http://3.111.37.163:8080/epankaj/v.0/users/${id}`)
      .then((res) => {
        setUname(res.data.name);
        setUemail(res.data.email);
      })
      .catch((res) => {
        console.log("err");
      });
    setEditId(id);
  };

  const handleUpdate = () => {
    axios
      .patch(`http://3.111.37.163:8080/epankaj/v.0/users/update/${editId}`, {
        name: uname,
        email: uemail,
      })
      .then((res) => {
        console.log(res.data.id);
        setEditId(-1);
        setUsers(
          users.map((user) =>
            user.id === editId ? { ...user, name: uname, email: uemail } : user
          )
        );
        setSuccessMessage("User Updated successfully!");
        setTimeout(() => setSuccessMessage(""), 2000); 
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://3.111.37.163:8080/epankaj/v.0/users/delete/${id}`)
      .then((res) => {
        setUsers(users.filter((user) => user.id !== id));
        setSuccessMessage("User Deleted successfully!");
        setTimeout(() => setSuccessMessage(""), 2000); 
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div id="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Add</button>
        </form>
        {successMessage && <div>{successMessage}</div>}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {records.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                {item.id === editId ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={uemail}
                        onChange={(e) => setUemail(e.target.value)}
                      />
                    </td>
                    <td>
                      <button onClick={handleUpdate}>Update</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <div id="btn">
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="edit-btn"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="delete-btn"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <button className="page-link1" onClick={prePage}>
              <li>Prev</li>
            </button>
            <button className="page-link1" onClick={nextPage}>
              <li>Next</li>
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Pagination;