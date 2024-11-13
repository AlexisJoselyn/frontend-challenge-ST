import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : {
      name: "",
      lastName: "",
      birthDay: "02-04-1990",
      documentType: "",
      documentNumber: "",
      cellphone: "",
      selectedPlan: "",
      planPrice: ""
    };
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
