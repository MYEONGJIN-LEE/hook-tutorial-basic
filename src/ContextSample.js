import React, { createContext, useContext } from "react";

/*
[useContext]
redux 대신 useContext+useReducer로 관리가 가능
*/
const ThemeContext = createContext("black");
const ContextSample = () => {
    const theme = useContext(ThemeContext);
    const style = {
        width: "24px",
        height: "24px",
        background: theme,
    };
    return <div style={style}></div>;
};

export default ContextSample;
