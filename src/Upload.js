import React, {useState} from 'react';
import "./Upload.css";
import axios from "./axios";

function Upload() {
    const [caption, setCaption] = useState('');
    const [img, setImg] = useState('');

    const handleUpload = async (e) => {
        e.preventDefault();
        console.log(img);
        // axios.post("/upload", {
        //     caption: caption,
        //     image: img
        // });
        
    } 
    return (
        <div className="upload">
            <div className="upload_container">

                <form enctype="multipart/form-data" method="post">
                    <input type="file" value={img} onSubmit={(e) => setImg(e.target.value)} />
                    <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Enter a caption" />
                    <button onClick={handleUpload}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Upload;
