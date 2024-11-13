import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    birthDay: "02-04-1990",
    documentType: "",
    documentNumber: "",
    cellphone: "",
    selectedPlan: "",
    planPrice:""
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
