import React from 'react';
import './Servers.css';

function Servers() {
    var colors = [
        "var(--color-accent)",
        "var(--color-accent-2)", 
        "var(--color-secondary)", 
        "var(--color-primary)"]

    let servers = [...Array(20)].map((e, i) => (<div className="Server" style={{backgroundColor: colors[Math.floor(Math.random()*colors.length)]}} key={i}></div>));

    var DOMservers = document.getElementsByClassName("Server");
    for (var i = 0; i < DOMservers.length; i++) {
        console.log(DOMservers[i].style.backgroundcolor);
    }
    
    return (<div class="Server-container">{servers}</div>);
}

export default Servers;
