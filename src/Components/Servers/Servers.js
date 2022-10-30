import React from 'react';
import './Servers.css';

function Servers() {
    var colors = [
        "var(--color-accent)",
        "var(--color-accent-2)", 
        "var(--color-secondary)", 
        "var(--color-primary)"]

    let servers = [...Array(100)].map((e, i) => (<div className="Server" style={{backgroundColor: colors[Math.floor(Math.random()*colors.length)]}} key={i}></div>));

    return (<div className="Server-container">{servers}</div>);
}

export default Servers;
