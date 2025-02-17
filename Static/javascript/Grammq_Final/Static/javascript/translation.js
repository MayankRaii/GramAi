document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('translateButton').addEventListener('click', function(event) {
        event.preventDefault();

        var inputText = document.getElementById('inputText').value.trim();

        if (!inputText) {
            alert('Please enter some text.');
            return;
        }

        // Hitting the API
        fetch('http://127.0.0.1:8000/translation', {
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

            // Display the result
            var outputText = document.getElementById('outputText');
            outputText.value = data.text;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error processing your request. Please try again later.');
        });
    });
});
