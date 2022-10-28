import React from 'react';
import './Channels.css';
import arrow from './../../images/tri-arrow.svg';

import Channel from './Channel/Channel.js';

let isHeaderFolded = false;

function Channels() {

    return (
        <div className='Channels-container'>
            <div className='Channels-header'>
                <div className='Top-toggle'>
                    Godume <img src={arrow} alt='expand/collapse' className='Exp-arrow' onClick={toogleHeader}/>
                </div>
                <div id='Header-content'>
                    Content!!!
                </div>
            </div>
            <Channel />
        </div>
    );
}

function toogleHeader(event) {
    if (isHeaderFolded) {
        event.target.style.transform = 'translateY(-10%) translateX(40px) scale(120%)';
        document.getElementById('Header-content').style.clipPath = 'inset(0 0)';
        isHeaderFolded = false;
    } else {
        event.target.style.transform = 'translateY(-10%) translateX(40px) scale(100%) rotate(.5turn)';
        document.getElementById('Header-content').style.clipPath = 'inset(100% 0)';
        isHeaderFolded = true;
    }
    console.log(event);
}

export default Channels;
