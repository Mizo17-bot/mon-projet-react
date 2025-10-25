import React ,{createContext,useState,useEffect,useContext} from "react";
const UserContext=createContext();
function UserProvider({children}){
   const[user,setUser]=useState({name:'Alice',connected:true});
   const toggleConnection=()=>{setUser(prev=>({...prev,connected:!prev.connected}));
};
return(
    <UserContext.Provider value={{user,toggleConnection}}>{children}</UserContext.Provider>
);}