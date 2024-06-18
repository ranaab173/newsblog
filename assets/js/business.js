document.addEventListener("DOMContentLoaded", function() {
    const businessNews = [
        { title: "پہلا کاروباری خبر", content: "یہ پہلی کاروباری خبر ہے۔" },
        { title: "دوسرا کاروباری خبر", content: "یہ دوسری کاروباری خبر ہے۔" },
        { title: "تیسرا کاروباری خبر", content: "یہ تیسری کاروباری خبر ہے۔" },
        { title: "چوتھا کاروباری خبر", content: "یہ چوتھا کاروباری خبر ہے۔" }
    ];

    const articlesContainer = document.querySelector('.news-articles');

    businessNews.forEach(article => {
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
