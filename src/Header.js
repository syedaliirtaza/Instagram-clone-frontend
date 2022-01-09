import React, {useState} from 'react';
import "./Header.css";
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Upload from "./Upload";

function Header() {
    const [upload, setUpload] = useState(false);
    
    const uploadPost = ()=>{
        setUpload(true)
    }
    
    return (
    <div>
        {!upload ? (
            <div className="header">
            <div className="header_container">
                <div className="logo">
                    <h1>Instagram</h1>
                </div>
                <div className="header_input">
                    <div className="header_inputContainer">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
                </div>
                <div className="header_right">
                    <IconButton>
                        <HomeIcon />
                    </IconButton>
                    <IconButton>
                        <MapsUgcIcon />
                    </IconButton>
                    <IconButton onClick={uploadPost}>
                        <AddBoxIcon />
                    </IconButton>
                    <IconButton>
                        <ExploreIcon />
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton>
                        <AccountCircleIcon alt="" src="my.jpeg" />
                    </IconButton>      
                </div>
            </div>
        </div>
        ):(
            <Upload />
        )}
        </div>
        
    )
}

export default Header;
