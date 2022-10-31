import React from 'react';
import './Channels.css';
import Channel from './Channel/Channel.js';

function Channels(props) {
    let channels;

    let channelNames = ['Introductions', 'General', 'YouTube',     'Memes', 'Off-topic', 'Bot Commands', 'Ideas',   'Bugs', 'General - Voice', 'Updates' ];
    let channelTypes = ['text',          'text',    'announcement','text',  'text',      'text',         'forum',   'forum','voice',           'calendar'];
    
    if (channelNames.length !== channelTypes.length) {
        channels = (
            <p style={{color: 'red'}}>Error!</p>
        );
    } else {
        channels = [...Array(channelNames.length)].map((e, i) => (<section id={channelNames[i]}><Channel key={i} name={channelNames[i]} type={channelTypes[i]}/></section>));
    }
    
    return (
        <div className='Channels-container'>
            <div className='Channels-header'>
                <div className='Server-name'>
                    {props.currentServer.name}
                </div>
                <div id='Header-content'>
                    Members: {Intl.NumberFormat(getLang(), { notation: 'compact' }).format(props.currentServer.members)}
                </div>
            </div>
            {channels}
        </div>
    );
}

function getLang() {
    if (navigator.languages !== undefined) 
      return navigator.languages[0]; 
    return navigator.language;
  }

export default Channels;
