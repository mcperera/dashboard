import React, { useState } from "react";
import { User, TabItem } from "../";

const tabData = ["STAFF", "EMPLOYEE"];

function UsersCard({ userData, setUserId }) {
  const [selectTab, setSelectTab] = useState("STAFF");

  return (
    <div className="h-full w-5/12 mr-5 shadow-2xl rounded-md">
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
      <div className="mt-8 px-5 flex flex-col items-center">
        {userData.length > 0 &&
          userData.map((user, index) => {
            return (
              <User
                key={index}
                name={user.name}
                userId={index + 1}
                setUserId={setUserId}
              />
            );
          })}
      </div>
    </div>
  );
}

export default UsersCard;
