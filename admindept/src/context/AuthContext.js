import { createContext, useEffect, useReducer } from "react";
import { auth } from "../fuctions/userAuth";
import { onAuthStateChanged } from "firebase/auth";

// creating authcontext using createContext() hook from react
export const AuthContext = createContext();

//creating a reducer function
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };

    default:
      return state;
  }
};

//creating an auth context provider that wraps all the routes
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  // using the Use effect hook to check if the user is already logged in.
  // if logged in already; send him/her to the dashboard
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  // console.log("AuthContext state:", state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
