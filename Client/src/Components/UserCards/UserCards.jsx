import "./UserCards.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UserCards() {
  const [users, setUsers] = useState([]);

  const fetchApi = async () => {
    //Con axios, permite realizar una request a la API con su respectivo link de forma asíncrona
    const response = await axios.get("http://142.93.254.119/api/users");
    if (Array.isArray(response.data)) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    fetchApi();
  },[]);

  return (
    <div>
      <h1>Usuarios</h1>
      <div className="card_container">
        {users.map((user, index) => (
          <div key={index} className="divs">
            <p>Nombre: {user.name}</p>
            <p>Edad: {user.age}</p>
            <p>Email: {user.mail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCards;
