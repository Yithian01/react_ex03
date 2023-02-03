const API_KEY='';

export const videoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=${API_KEY}`;



export function searchUrl(keyword){
    return  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&regionCode=kr&key=${API_KEY}`;
}

export function channelUrl(channelId){
    return `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`
}






