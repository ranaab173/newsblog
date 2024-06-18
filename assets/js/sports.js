document.addEventListener("DOMContentLoaded", function() {
    const sportsNews = [
        { title: "پہلا کھیلوں کی خبر", content: "یہ پہلا کھیلوں کی خبر ہے۔" },
        { title: "دوسرا کھیلوں کی خبر", content: "یہ دوسرا کھیلوں کی خبر ہے۔" },
        { title: "تیسرا کھیلوں کی خبر", content: "یہ تیسرا کھیلوں کی خبر ہے۔" },
        { title: "چوتھا کھیلوں کی خبر", content: "یہ چوتھا کھیلوں کی خبر ہے۔" }
    ];

    const articlesContainer = document.querySelector('.news-articles');

    sportsNews.forEach(article => {
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
