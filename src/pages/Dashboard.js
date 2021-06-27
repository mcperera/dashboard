import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { api_getUsers, api_getUserLogs } from "../api/";
import { signOut } from "../store/actionCreators/user";
import { NavBar, Header, Layout, UsersCard, Map, Logs } from "../components/";

const userData = [
  {
    id: 1,
    name: "Jaison Burnatte",
  },
  {
    id: 1,
    name: "Ali Akbhar",
  },
  {
    id: 1,
    name: "Clifford Shan",
  },
  {
    id: 1,
    name: "Mickey Mouse",
  },
];

const userLogs = [
  {
    id: 1,
    date: "2020-05-06",
    alert_view: false,
    time: "07:18",
    latitude: 53.4963900568602,
    longitude: -2.72096801304555,
  },
  {
    id: 2,
    date: "2020-02-25",
    alert_view: true,
    time: "01:30",
    latitude: 51.4904516263179,
    longitude: -2.7769879032744,
  },
  {
    id: 3,
    date: "2020-09-11",
    alert_view: true,
    time: "09:32",
    latitude: 52.5189976798728,
    longitude: -2.72096801304555,
  },
  {
    id: 4,
    date: "2020-10-22",
    alert_view: false,
    time: "07:35",
    latitude: 51.4904516263179,
    longitude: -3.02734457854324,
  },
];

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // const [userData, setUserData] = useState([]);
  // const [userLogs, setUserLogs] = useState([]);
  const [userId, setUserId] = useState(1);

  const handleSignOut = () => {
    dispatch(signOut(history));
  };

  // useEffect(() => {
  //   api_getUsers(user.token)
  //     .then((res) => {
  //       setUserData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [user]);

  // useEffect(() => {
  //   api_getUserLogs(user.token, userId)
  //     .then((res) => {
  //       setUserLogs(res.data.logs);
  //     })
  //     .catch((err) => console.log(err));
  // }, [user, userId]);

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
