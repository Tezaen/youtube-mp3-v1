import axios from 'axios';
import React, { useState, useContext } from 'react';

// extracted buttons here: https://api.vevioz.com/
const YoutubeLinkText = () => {

    const [text, setText] = useState(''); //set state
    const [isButton, setIsButton] = useState(false);

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onClick = (e) => {
        e.preventDefault();
        console.log(text);
        let ytVideoId = text.substring(text.length - 11);
        console.log(ytVideoId);
    }

    const onConvert = () => {
        setText('');
    }

    const matchYoutubeUrl = (url) => {
        var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if(url.match(p)){
            return url.match(p)[1];
        }
        return false;
    }

    return (
        <div>
            <input type='text' name="text" placeholder="Enter a valid youtube video link..." value={text} onChange={onChange}/>
            {
                text === '' || text === null || text === undefined ? (
                    <p>Input a youtube video URL</p>
                ) : matchYoutubeUrl(text) ? (
                    <>
                        <h3>MP3 Options</h3>
                        <iframe 
                            src={`https://api.vevioz.com/@api/button/mp3/${text}`} 
                            style={{width:"100%", height: "150px", border: "none" }} 
                            scrolling="no" 
                        ></iframe>
                        <h3>MP4 Options</h3>
                        <iframe 
                            src={`https://api.vevioz.com/@api/button/videos/${text}`} 
                            style={{width:"100%",height:"300px",border:"none"}}
                            scrolling="no"
                        ></iframe>
                    </>
                ) : (
                    <p>
                        Enter a valid youtube URL please
                    </p>
                )
            }
            
        </div>
    )
}

export default YoutubeLinkText
