import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { api_getUsers } from "../../api/auth";
import { tab_line, seleted_tab } from "./UsersCard.module.css";

const tabData = ["STAFF", "EMPLOYEE"];

const TabItem = ({ label, selectTab, setSelectTab }) => {
  return (
    <div
      className={`h-20 w-6/12 flex items-center justify-center ${
        selectTab === label ? seleted_tab : tab_line
      }`}
      onClick={() => setSelectTab(label)}>
      <h1
        className={`text-lg font-bold ${
          selectTab === label ? "text-red-600" : "text-gray-300"
        }`}>
        {label}
      </h1>
    </div>
  );
};

function UsersCard() {
  const { user } = useSelector((state) => state.user);
  const [selectTab, setSelectTab] = useState("STAFF");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    api_getUsers(user.token)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, [selectTab]);

  console.log(userData);

  return (
    <div className="h-full w-4/12 shadow-2xl rounded-md">
      <div className={`flex`}>
        {tabData.map((label, index) => {
          return (
            <TabItem
              key={index}
              label={label}
              selectTab={selectTab}
              setSelectTab={setSelectTab}
            />
          );
        })}
      </div>
      {userData &&
        userData.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
    </div>
  );
}

export default UsersCard;
