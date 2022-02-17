import { createContext, useEffect, useReducer } from "react";
import { auth } from "../components/userAuth";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext() 

export const authReducer =(state, action)=>{
    switch(action.type){
        case 'LOGIN':
            return { ...state, user: action.payload}
        case 'AUTH_IS_READY':
            return { ...state, user: action.payload, authIsReady: true}
        
        default:
            return state
    }

}

export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(authReducer, {
        user:null,
        authIsReady: false
    })

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user) => {
            dispatch({type: 'AUTH_IS_READY', payload: user})
            unsub()
          });
    }, [])

    console.log("AuthContext state:", state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}