import UserForm from "../components/Jest/UserForm";
import UserList from "../components/Jest/UserList";
import { useState } from 'react';


export default function Jest() {
    const [users, setUsers] = useState([]);

    const onUserAdd = (user) => {
      setUsers([...users, user]);
    };
  
    return (
      <div>
        <UserForm onUserAdd={onUserAdd} />
        <hr />
        <UserList users={users} />
      </div>
    );
}
