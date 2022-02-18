import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

//creating a useAuthContext hook
export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }

    return context
}