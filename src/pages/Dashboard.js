import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../store/actionCreators/user";
import { NavBar, Header, Layout } from "../components/";

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);

  const handleSignOut = () => {
    dispatch(signOut(history));
  };

  return (
    <div className="h-screen flex">
      {/* <h1>Dashboard {user.username}</h1>
      <button onClick={handleSignOut}>Sign Out</button> */}
      <NavBar />
      <Layout>
        <Header />
      </Layout>
    </div>
  );
}

export default Dashboard;
