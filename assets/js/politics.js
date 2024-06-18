document.addEventListener("DOMContentLoaded", function() {
    const politicalNews = [
        { title: "پہلا سیاسی خبر", content: "یہ پہلا سیاسی خبر ہے۔" },
        { title: "دوسرا سیاسی خبر", content: "یہ دوسرا سیاسی خبر ہے۔" },
        { title: "تیسرا سیاسی خبر", content: "یہ تیسرا سیاسی خبر ہے۔" },
        { title: "چوتھا سیاسی خبر", content: "یہ چوتھا سیاسی خبر ہے۔" }
    ];

    const articlesContainer = document.querySelector('.news-articles');

    politicalNews.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');

        const articleTitle = document.createElement('h3');
        articleTitle.textContent = article.title;

        const articleContent = document.createElement('p');
        articleContent.textContent = article.content;

        articleElement.appendChild(articleTitle);
        articleElement.appendChild(articleContent);

        articlesContainer.appendChild(articleElement);
    });
});
