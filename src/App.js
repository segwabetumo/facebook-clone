import React from "react";
import "./App.css";

// imported components
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Post from "./components/Post";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [user, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="app__header">
            <Header />
          </div>
          <div className="app__body">
            <SideBar />
            <Post />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
