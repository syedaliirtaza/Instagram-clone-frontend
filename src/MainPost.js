import React ,{useState, useEffect} from 'react'
import "./MainPost.css";
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function MainPost() {
    const [seed, setSeed] = useState('');
    useEffect(function(){
        setSeed(Math.floor(Math.random() * 5000));
    },[]);
    return (
        <div className="mainPost">
            <div className="mainPost_container">
                <div className="mainPost_story">
                    <div className="story_border">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" sx={{ width: 74, height: 74 }} />
                    </div>
                    <div className="story_border">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" sx={{ width: 74, height: 74 }} />
                    </div>
                    <div className="story_border">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" sx={{ width: 74, height: 74 }} />
                    </div>
                    <div className="story_border">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" sx={{ width: 74, height: 74 }} />
                    </div>
                    <div className="story_border">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" sx={{ width: 74, height: 74 }} />
                    </div>
            </div>
            <div className="mainPost_card">
                    <div className="mainPost_card_Header">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" sx={{ width: 34, height: 34 }} />
                    <h3>Aliirtaza</h3>
                </div>
                <div className="mainPost_card_Image">
                <img src="my.jpg" alt="#" />
                </div>
                <div className="mainPost_card_info">
                    <div className="mainPost_card_info_icons">
                        <div>
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                            <IconButton>
                                <MapsUgcIcon />
                            </IconButton>
                            <IconButton>
                                <SendIcon />
                            </IconButton>
                        </div>
                            <IconButton>
                                <BookmarkBorderIcon />
                            </IconButton>
                    </div>
                    <div className="mainPost_card_info_caption">
                        <h3>1000 likes</h3>
                        <div className="caption_user">
                            <div className="user_details" >
                                <h3>Aliirtaza</h3>
                                <p>Hey this is the insta clone made using MERN stack ...</p>
                            </div>
                            <h4>View all 14 comments</h4>
                            <h4>1 Day Ago</h4>
                        </div>
                    </div>
                    <div className="mainPost_card_info_footer">
                        <div className="mainPost_card_info_footer_container">
                            <InsertEmoticonIcon />
                            <input type="text" placeholder="Add a comment" />
                        </div>
                    </div>
                </div>
            </div>    
                {/* /////////////////////////////// */}
                <div className="mainPost_card">
                    <div className="mainPost_card_Header">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="#" sx={{ width: 34, height: 34 }} />
                    <h3>Aliirtaza</h3>
                </div>
                <div className="mainPost_card_Image">
                <img src="my.jpg" alt="#" />
                </div>
                <div className="mainPost_card_info">
                    <div className="mainPost_card_info_icons">
                        <div>
                            <IconButton>
                                <FavoriteBorderIcon />
                            </IconButton>
                            <IconButton>
                                <MapsUgcIcon />
                            </IconButton>
                            <IconButton>
                                <SendIcon />
                            </IconButton>
                        </div>
                            <IconButton>
                                <BookmarkBorderIcon />
                            </IconButton>
                    </div>
                    <div className="mainPost_card_info_caption">
                        <h3>1000 likes</h3>
                        <div className="caption_user">
                            <div className="user_details" >
                                <h3>Aliirtaza</h3>
                                <p>Hey this is the insta clone made using MERN stack ...</p>
                            </div>
                            <h4>View all 14 comments</h4>
                            <h4>1 Day Ago</h4>
                        </div>
                    </div>
                    <div className="mainPost_card_info_footer">
                        <div className="mainPost_card_info_footer_container">
                            <InsertEmoticonIcon />
                            <input type="text" placeholder="Add a comment" />
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        </div>
    )
}

export default MainPost;
