import {getPost} from "/js/post.js";
let testBlob = "Getting Started with React"

async function onLoadPost(){
    let postFetched = await getPost(testBlob)
// console.log(postFetched);
    window.title = postFetched.Title
}

onLoadPost()