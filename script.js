document.getElementById('recommendation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const recommendationText = document.getElementById('recommendation-input').value;
    
    // Create a new blockquote element
    const newRecommendation = document.createElement('blockquote');
    newRecommendation.innerHTML = `<p>"${recommendationText}"</p><footer>- New Contributor</footer>`;
    
    // Add the new recommendation to the recommendations section
    document.getElementById('recommendations').appendChild(newRecommendation);

    // Clear the input field
    document.getElementById('recommendation-input').value = '';

    // Show confirmation message
    alert('Thank you for your recommendation!');
});
