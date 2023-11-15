import {
    getFeaturedPost
} from "/js/modules/post.js";

import {
    formatTimestampToDateString
} from "/js/modules/timestampsConverter.js";


const featuredPosts = await getFeaturedPost()
const articleElement = document.querySelector(".head-of-more")


featuredPosts.forEach(post => {
    let postCard = `
    <div class="art" blob="${post.title}">
    <img src="assets/images/9002167_4063045.jpg" alt="image">
    
    <div class="art-det">
        <p class="art-name">${post.title}</p>
    
        <div class="date-and-time2">
            <p class="date">${formatTimestampToDateString(parseInt(post.date))}</p>
            <p>-</p>
            <p class="reading time">${post.timeToRead += " mins read"}</p>
        </div>
    </div>
    <a href="javascript:void(0)" onclick="event.stopPropagation()"><i class="fas fa-heart"></i></a>
    </div>
    `
    articleElement.insertAdjacentHTML("afterend", postCard)
});

document.querySelectorAll(".art").forEach(element =>{
    element.addEventListener("click", ()=>{
        let blobAcquired = element.getAttribute("blob")
        window.location.href = `/post.html?blob=${blobAcquired}`
    })
})