document.addEventListener("DOMContentLoaded", function() {
    const recentNews = [
        { title: "پہلا حالیہ خبر", content: "یہ پہلی حالیہ خبر ہے۔" },
        { title: "دوسری حالیہ خبر", content: "یہ دوسری حالیہ خبر ہے۔" },
        { title: "تیسری حالیہ خبر", content: "یہ تیسری حالیہ خبر ہے۔" },
        { title: "چوتھی حالیہ خبر", content: "یہ چوتھی حالیہ خبر ہے۔" }
    ];

    const articlesContainer = document.querySelector('.news-articles');

    recentNews.forEach(article => {
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
