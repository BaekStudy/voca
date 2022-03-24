import React from "react";

function MapPractice() {
  const userList = [
    { id: 1, name: "Mike" },
    { id: 2, name: "Tom" },
    { id: 3, name: "Jane" },
    { id: 4, name: "Paul" },
  ];
  return (
    <>
      <ul>
        {userList.map((user, id) => (
          <li key={id}>
            {user.id} : {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MapPractice;
