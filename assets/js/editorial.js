document.addEventListener("DOMContentLoaded", function() {
    const editorialPicks = [
        { title: "پہلا اداری انتخاب", content: "یہ پہلا اداری انتخاب ہے۔" },
        { title: "دوسرا اداری انتخاب", content: "یہ دوسرا اداری انتخاب ہے۔" },
        { title: "تیسرا اداری انتخاب", content: "یہ تیسرا اداری انتخاب ہے۔" },
        { title: "چوتھا اداری انتخاب", content: "یہ چوتھا اداری انتخاب ہے۔" }
    ];

    const articlesContainer = document.querySelector('.news-articles');

    editorialPicks.forEach(article => {
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
