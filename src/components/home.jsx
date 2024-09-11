import React from "react";
import "./home.css";

const Home = () => {
    return (
        <div>
            <h1>Este es el componente Home.jsx</h1>
            <button
            id="button"
                onClick={() => {
                    alert("mostras alerta");
                }}
            >
                Alerta
            </button>
        </div>
    );
};

export default Home;
