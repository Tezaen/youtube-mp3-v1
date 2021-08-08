const ytdl = require('ytdl-core');
const fs = require('fs');

async function youtubeMp4Downloader(urlInput) {
    let url = urlInput;
    let info = await ytdl.video
    console.log(info);
    // ytdl(url).pipe(fs.createWriteStream('download.mp4'));
};

youtubeMp4Downloader('https://www.youtube.com/watch?v=Ix-Y4jv7yvM');