import React from "react";

const Home = () => {
    return (
        <div>
            <h1>Este es el componente Home.jsx</h1>
            <button
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
