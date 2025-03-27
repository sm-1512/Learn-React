import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState("")
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}{" "}
        {/* Wraps children components inside <userContext.Provider>, making user and setUser available to all child components. */}
      </UserContext.Provider>
    );   
}

export default UserContextProvider