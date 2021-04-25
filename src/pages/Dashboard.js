import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { api_getUsers } from "../api/auth";
import { signOut } from "../store/actionCreators/user";
import { NavBar, Header, Layout, UsersCard, Map } from "../components/";

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [userData, setUserData] = useState([]);

  const handleSignOut = () => {
    dispatch(signOut(history));
  };

  useEffect(() => {
    api_getUsers(user.token)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  console.log(userData);

  return (
    <div className="h-screen flex">
      <NavBar />
      <Layout>
        <Header handleSignOut={handleSignOut} />
        <div className="h-5/6 w-full px-2 py-5 flex">
          <UsersCard userData={userData} />
          <div className="w-full flex flex-col">
            <Map />
            <div className="h-full w-full ml-5 mt-3 flex flex-col shadow-2xl rounded-md"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Dashboard;
