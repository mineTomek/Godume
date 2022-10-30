import React from 'react';
import './Channels.css';
import Channel from './Channel/Channel.js';

function Channels(props) {
    let channelNames = ['Introductions', 'General', 'YouTube',     'Memes', 'Off-topic', 'Ideas', 'Bot Commands', 'Bugs', 'General'];
    let channelTypes = ['text',          'text',    'announcement','text',  'text',      'text',  'text',         'forum','voice'  ];
    
    let channels = [...Array(9)].map((e, i) => (<Channel key={i} name={channelNames[i]} type={channelTypes[i]}/>));

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
