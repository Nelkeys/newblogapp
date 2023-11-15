import {
    getPost
} from "/js/modules/post.js";

import {
    formatTimestampToDateString
} from "/js/modules/timestampsConverter.js";

import {
    urlScraper
} from "/js/modules/urlScraper.js";


let postTitle = document.querySelectorAll(".post-title")
let postContent = document.querySelector(".post-content")
let dateAndTime = document.querySelector(".date-and-time")
let timeToRead = document.querySelector(".time-to-read")

checkPost()
async function checkPost() {
    let postBlob = urlScraper()
    let postFetched = await getPost(postBlob);
    //Validate API Response
    if (postFetched == false) {
        document.title = "Not Found";
        postTitle.forEach(element => element.innerHTML = "The page you are looking for could not be found <br><a href=\"/\">Back to home</a>")
        return 0
    }

    onloadPost(postFetched)
}


function onloadPost(postFetched) {
    document.title = postFetched.title;
    postTitle.forEach(element => element.innerHTML = postFetched.title)
    postContent.innerHTML = postFetched.content
    dateAndTime.innerHTML = formatTimestampToDateString(parseInt(postFetched.date));
    timeToRead.innerHTML = postFetched.timeToRead += " mins read"
}