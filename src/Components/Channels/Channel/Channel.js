import React from 'react';
import './Channel.css';

function Channel(props) {

    let channelTypeIconClass = 'solid fa-circle-exclamation Error';

    if (props.type === 'text') {
        channelTypeIconClass = 'regular fa-hashtag';
    } else if (props.type === 'voice') {
        channelTypeIconClass = 'solid fa-volume-high';
    } else if (props.type === 'forum') {
        channelTypeIconClass = 'regular fa-comments';
    } else if (props.type === 'announcement') {
        channelTypeIconClass = 'solid fa-bullhorn';
    }

    return (
        <div className='Channel-box'>
            <i className={'fa-' + channelTypeIconClass + ' Channel-type'}></i> {props.name}
        </div>
    )
}

export default Channel;
