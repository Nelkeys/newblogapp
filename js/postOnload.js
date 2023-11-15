import {
    getPost
} from "/js/modules/post.js";

import {
    formatTimestampToDateString
} from "/js/modules/timestampsConverter.js";

let testBlob = "Getting Started with React"

let postTitle = document.querySelectorAll(".post-title")
let postContent = document.querySelector(".post-content")
let dateAndTime = document.querySelector(".date-and-time")
let timeToRead = document.querySelector(".time-to-read")

async function onLoadPost() {
    let postFetched = await getPost(testBlob);


    document.title = postFetched.title;
    postTitle.forEach(element => element.innerHTML = postFetched.title)
    postContent.innerHTML = postFetched.content
    dateAndTime.innerHTML = formatTimestampToDateString(parseInt(postFetched.date));
    timeToRead.innerHTML = postFetched.timeToRead += " mins read"
}

onLoadPost()