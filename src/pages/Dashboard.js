import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../store/actionCreators/user";
import { NavBar, Header, Layout, UsersCard } from "../components/";

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut(history));
  };

  return (
    <div className="h-screen flex">
      <NavBar />
      <Layout>
        <Header handleSignOut={handleSignOut} />
        <div className="h-5/6 w-full px-2 py-5">
          <UsersCard />
        </div>
      </Layout>
    </div>
  );
}

export default Dashboard;
