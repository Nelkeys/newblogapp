function openPage() {
    event.stopPropagation()
    // Open the page with a new window.
    window.location.href = `home.html`;
}

document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const articles = document.querySelectorAll('.art');

    articles.forEach(article => {
        const title = article.querySelector('.art-name').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            article.style.display = 'flex';
        } else {
            article.style.display = 'none';
        }
    });
});
