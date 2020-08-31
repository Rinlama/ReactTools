import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [users, setUsers] = useState([{ name: "sam" }]);
  const [isBusy, setIsBusy] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setIsBusy(true);
    const fakeData = [
      {
        name: "mike",
      },
      {
        name: "samurai",
      },
      {
        name: "jack",
      },
      {
        name: "ryu",
      },
    ];
    setTimeout(() => {
      setUsers([...users, ...fakeData]);
      setIsBusy(false);
    }, 3000);
  };

  return (
    <div className="App m-4">
      <Loader isBusy={isBusy}></Loader>
      <ul className="list-group">
        {users.map((d) => (
          <li className="list-group-item">{d.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
