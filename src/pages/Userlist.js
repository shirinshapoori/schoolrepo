import React, { useEffect, useState } from "react";
import axios from "axios";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <div>
      {users.map((u) => (
        <>
       <div className="back-blue">
          <div>{u.name}</div>
          <div>{u.username}</div>
          </div>
        </>
      ))}
    </div>
  );
};  export default Userlist;
