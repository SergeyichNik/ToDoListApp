import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useNavigate()
    return (
        <>
            <h1>Information page</h1>

            <p>This app was made by Tyunev Nikita</p>
            <p>2022</p>
            <button  className={"btn"} onClick={() =>history('/')}>Back to to-do list</button>
        </>
    )
}