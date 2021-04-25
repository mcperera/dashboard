import React from "react";

function Logs({ userLogs }) {
  console.log("userLogs-->", userLogs);
  return (
    <div className="h-full w-full ml-5 mt-3 px-2 py-2 flex flex-col shadow-2xl rounded-md overflow-auto">
      <div className="grid grid-flow-col grid-cols-4 grid-rows-1 gap-4 text-center my-4">
        <span>Date</span>
        <span>Alert View</span>
        <span>Time</span>
        <span>Location</span>
      </div>
      {userLogs.length > 0 &&
        userLogs.map(({ id, date, alert_view, time, latitude, longitude }) => {
          return (
            <div
              key={id}
              className="grid grid-flow-col grid-cols-4 grid-rows-1 gap-4 text-center my-2">
              <span>{date}</span>
              <span>{`${alert_view ? "On" : "Off"}`}</span>
              <span>{time}</span>
              <span>{`${latitude.toFixed(4)} / ${longitude.toFixed(4)}`}</span>
            </div>
          );
        })}
    </div>
  );
}

export default Logs;
