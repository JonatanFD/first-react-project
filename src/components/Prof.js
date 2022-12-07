import React from "react";
import "./css/Prof.css";

function Prof(props) {
    return (
        <div className="prof-container">
            <img
                className="prof-photo"
                src={require(`./pics/${props.img}-testimonio.png`)}
                alt="Profile pic"
            />
            <div className="prof-content">
                <p className="p-1">
                    {props.name} en {props.country}
                </p>
                <p className="p-2">
                    {props.position} en {props.company}
                </p>
                <p className="p-3">"{props.prof}"</p>
            </div>
        </div>
    );
}

export default Prof;
