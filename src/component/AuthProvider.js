import React, { useState } from "react";
export const AuthContext = React.createContext();
export const SwitchContext = React.createContext();

function AuthProvider({ children }) {
  const [isAuth2, setIsAuth2] = useState(false);
  //   const changeAuth = () => {
  //     setIsAuth2(true);
  //   };
  return (
    <>
      <AuthContext.Provider value={isAuth2}>
        <SwitchContext.Provider value={setIsAuth2}>
          {children}
        </SwitchContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
