import React, { useState, createContext } from "react";
export const Context = createContext();

export const Roomprovider = props => {

    //this component holds the state for Popup && Corps 

    const [rooms, setrooms] = useState([]);
    const [visible, setvisible] = useState();

    return (
        <Context.Provider value={[rooms, setrooms]}>
            {props.children}
        </Context.Provider>
    );
}

