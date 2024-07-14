'use client';

import React from 'react';

const MusicPlayer = () => {
    return ( <
        div >
        <
        audio controls autoPlay loop >
        <
        source src = "/music/wedding-song.mp3"
        type = "audio/mp3" / >
        <
        /audio> <
        /div>
    );
};

export default MusicPlayer;