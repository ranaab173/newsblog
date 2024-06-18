document.addEventListener("DOMContentLoaded", function() {
    const breakingNews = [
        { title: "پہلا بریکنگ نیوز", content: "یہ پہلی بریکنگ نیوز ہے۔" },
        { title: "دوسرا بریکنگ نیوز", content: "یہ دوسری بریکنگ نیوز ہے۔" },
        { title: "تیسرا بریکنگ نیوز", content: "یہ تیسرا بریکنگ نیوز ہے۔" },
        { title: "چوتھا بریکنگ نیوز", content: "یہ چوتھا بریکنگ نیوز ہے۔" }
    ];

    const articlesContainer = document.querySelector('.news-articles');

    breakingNews.forEach(article => {
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
