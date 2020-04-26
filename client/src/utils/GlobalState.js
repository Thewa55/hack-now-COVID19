import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => { 

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                currentUser: action.user
            }
}}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        currentUser: {
            id: "",
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: ""
        },
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };