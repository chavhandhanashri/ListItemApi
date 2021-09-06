import React, { useEffect, useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
 import "bootstrap/dist/css/bootstrap.min.css";


const Task1 = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);


  return (
    <div className="App">
      <div className="main">
        <div className="row mb-3">  
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item, index) => (
                <tr key={`${item}${index}`}>
                  <td>{item.id}</td>
                  <td>{item?.title}</td>
                  <td>{item?.completed ? "true" : "false"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task1;
