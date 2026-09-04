// import React, { createContext, useEffect, useState } from 'react'

// import  { jwtDecode } from 'jwt-decode';
//   export const AuthContext=createContext(null);




// export default function AuthContextProvider(props) {
//   const [userData, setUserData] = useState(null)
  
//   let saveUSerData = () => {
//     let encoded = localStorage.getItem("usertoken");
//     let decode = jwtDecode(encoded);
//     setUserData(decode)
    
//   }
//   useEffect(() => {
//   if (localStorage.getItem("usertoken")) {
//     saveUSerData();
//   }
// }, []);
//   return (
//     <AuthContext.Provider value={{userData,saveUSerData }}>
//       {props.children}
//     </AuthContext.Provider>

//   )
// }
import React, { createContext, useEffect, useState } from 'react'

import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext(null);


export default function AuthContextProvider(props) {

  const [userData, setUserData] = useState(null)

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