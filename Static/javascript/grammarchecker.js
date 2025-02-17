document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('grammarchecker').addEventListener('click', function(event) {
        event.preventDefault();

        var inputText = document.getElementById('inputText').value.trim();

        if (!inputText) {
            alert('Please enter some text.');
            return;
        }

        // Hitting the API
        fetch('http://127.0.0.1:8000/grammar_correct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: inputText }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response:', data);

            // Format and display the result
            var outputText = document.getElementById('outputText');
            if (data.errors && data.errors.length > 0) {
                var formattedResult = data.errors.map(error => {
                    return `Sentence: ${error.sentence}\nError: ${error.error}\nSuggestions: ${error.suggestions.join(', ')}\n\n`;
                }).join('');
                outputText.value = formattedResult;
            } else {
                outputText.value = 'No grammar errors found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error processing your request. Please try again later.');
        });
    });
});
