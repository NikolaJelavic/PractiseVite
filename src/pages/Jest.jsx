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
        <br /><br />
        <p>After a lot of time, I have realizes that Jest work only with pure React.</p>
      </div>
    );
}
