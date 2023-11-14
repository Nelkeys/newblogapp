import {getPost} from "/js/post.js";
let testBlob = "Getting Started with React"

async function onLoadPost(){
    let postFetched = await getPost(testBlob);
    document.title = postFetched.title;
    
}

onLoadPost()