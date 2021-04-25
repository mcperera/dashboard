import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { api_getUsers, api_getUserLogs } from "../api/";
import { signOut } from "../store/actionCreators/user";
import { NavBar, Header, Layout, UsersCard, Map, Logs } from "../components/";

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [userData, setUserData] = useState([]);
  const [userLogs, setUserLogs] = useState([]);
  const [userId, setUserId] = useState(1);

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

  useEffect(() => {
    api_getUserLogs(user.token, userId)
      .then((res) => {
        setUserLogs(res.data.logs);
      })
      .catch((err) => console.log(err));
  }, [user, userId]);

  return (
    <div className="h-screen flex">
      <NavBar />
      <Layout>
        <Header handleSignOut={handleSignOut} />
        <div className="h-5/6 w-full px-2 py-5 flex">
          <UsersCard userData={userData} setUserId={setUserId} />
          <div className="w-full flex flex-col">
            <Map />
            <Logs userLogs={userLogs} />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Dashboard;
