// imp content API
import React, { createContext, useContext, useReducer } from "react";

//preparing the data layer
export const StateContext = createContext();

// high order component to wrap the app => state provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// pull something from the data layer
export const useStateValue = () => useContext(StateContext);
export default StateProvider;
