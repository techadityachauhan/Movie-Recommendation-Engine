const recommendations = {
    action: [
        { title: "The Dark Knight", link: "thedarkknight.html" },
        { title: "Inception", link: "https://www.imdb.com/title/tt1375666/" },
        // Add more action movies here...
    ],
    comedy: [
        { title: "Superbad", link: "https://www.imdb.com/title/tt0829482/" },
        { title: "The Hangover", link: "https://www.imdb.com/title/tt1119646/" },
        // Add more comedy movies here...
    ],
    drama: [
        { title: "The Shawshank Redemption", link: "https://www.imdb.com/title/tt0111161/" },
        { title: "Forrest Gump", link: "https://www.imdb.com/title/tt0109830/" },
        // Add more drama movies here...
    ],
    horror: [
        { title: "The Exorcist", link: "index.html" },
        { title: "The Shining", link: "https://www.imdb.com/title/tt0081505/" },
        // Add more horror movies here...
    ]
};

function getRecommendation() {
    const genre = document.getElementById('genre').value;
    const movies = recommendations[genre];
    const randomIndex = Math.floor(Math.random() * movies.length);
    const recommendation = movies[randomIndex];
    const recommendationElem = document.getElementById('recommendation');
    recommendationElem.innerHTML = `
        <p>We recommend: <a href="${recommendation.link}" target="_blank">${recommendation.title}</a></p>
    `;
}

document.getElementById('instagramIcon').addEventListener('click', function() {
    // Your onclick event handler code here
    window.location.href = "https://www.instagram.com"; // Example: Redirect to Instagram
});

document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
});

document.getElementById('ratingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('message').textContent = 'Form submitted';
    document.getElementById('message').style.display = 'block';
});

