import React from "react";

import { UserProvider } from "./UserContext";
type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {


  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
};