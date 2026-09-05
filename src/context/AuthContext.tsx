import React, { createContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
  userData: any;
  saveUSerData: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  userData: null,
  saveUSerData: () => {},
});

export default function AuthContextProvider(props: { children: React.ReactNode }) {

  const [userData, setUserData] = useState<any>(null)

  let saveUSerData = () => {

    let encoded = localStorage.getItem("usertoken");

    if (encoded) {
      let decode = jwtDecode(encoded);
      setUserData(decode)
    }

  }

  useEffect(() => {

    if (localStorage.getItem("usertoken")) {
      saveUSerData();
    }

  }, []);

  return (

    <AuthContext.Provider value={{ userData, saveUSerData }}>
      {props.children}
    </AuthContext.Provider>

  )
}
