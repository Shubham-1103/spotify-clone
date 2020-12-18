import React, {createContext, useContext, useReducer} from "react"; // refer react documentation for this

export const DataLayerContext = createContext();// prepare the dataLayer

// children is App component in index.js file
export const DataLayer = ({initialState, reducer, children}) =>( 
    <DataLayerContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = ()=> useContext(DataLayerContext);