const article = document.querySelectorAll(".article");
article.forEach(function (item) {
    const btn = item.querySelector(".question-btn");
    btn.addEventListener('click', function () {
        article.forEach(function (art) {
            if (art !== item) {
                art.classList.remove("show-text");
            }
        })
        item.classList.toggle("show-text");
    })
});