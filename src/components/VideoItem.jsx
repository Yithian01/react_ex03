import React from 'react';

const VideoItem = () => {
    return (
        <li className='videoItem'>
            <div className='Item'>
                <div className='thumNail'>
                    <img src="" alt="videoThumnaul" />
                </div>
                <div className='metaData'>
                    <div className='channelImg'>
                        <img src="" alt="channelImg-thum" />
                    </div>
                    <div className='infoText'>
                        <p className='title'>타이틀</p>                      
                        <p className='channel'>채널타이틀</p>                      
                        <p className='publishData'>생성날짜</p>                      
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;