import React, { useEffect, useState } from 'react';
import "./RightSidebar.css";
import { Avatar } from '@mui/material';

function RightSidebar() {
    const [ seed, setSeed ] = useState('');
    useEffect(function(){
        setSeed(Math.floor(Math.random() * 5000));
    },[]);
    return (
        <div className="rightSidebar">
            <div className="rightSidebar_container">
            <div className="rightSidebar_container_header">
                <div className="rightSidebar_display">
                        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" />
                    <div className="rightSidebar_info">
                        <h3>Testing Room</h3>
                        <p>test</p>
                    </div>
                </div>
            <small className="switch">Switch</small>
            </div>
            <div className="rightSidebar_container_suggestions">
                <div className="suggestion_head">
                    <h3>Sugesstions for you</h3>
                    <p>See All</p>
                </div>
                <div className="suggestion_body">
                    <div className="suggestion_body_display">
                            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" />
                        <div className="suggestion_body_info">
                            <h2>Testing Room</h2>
                            <p>az</p>
                        </div>
                    </div>
                    <small className="switch">Follow</small>
                </div>
                {/* ///////////////////////////////// */}
                <div className="suggestion_body">
                    <div className="suggestion_body_display">
                            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" />
                        <div className="suggestion_body_info">
                            <h2>Testing Room</h2>
                            <p>az</p>
                        </div>
                    </div>
                    <small className="switch">Follow</small>
                </div>
                <div className="suggestion_body">
                    <div className="suggestion_body_display">
                            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" />
                        <div className="suggestion_body_info">
                            <h2>Testing Room</h2>
                            <p>az</p>
                        </div>
                    </div>
                    <small className="switch">Follow</small>
                </div>
                <div className="suggestion_body">
                    <div className="suggestion_body_display">
                            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" />
                        <div className="suggestion_body_info">
                            <h2>Testing Room</h2>
                            <p>az</p>
                        </div>
                    </div>
                    <small className="switch">Follow</small>
                </div>
            </div>
            </div>
        </div>
    )
}

export default RightSidebar;
