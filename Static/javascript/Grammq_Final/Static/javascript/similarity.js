function uploadFiles() {
    var files = document.getElementById('files').files;
    var formData = new FormData();

    for (var i = 0; i < files.length; i++) {
        formData.append('files[]', files[i]);
    }

    fetch('http://127.0.0.1:8000/similar_text_class', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            var output = document.getElementById('output');
            output.innerHTML = `
                    <p>Most similar text: ${data.most_similar_text}</p>
                    <p>Most similar file name: ${data.most_similar_name}</p>
                    <p>Overall similarity: ${data.overall_similarity}</p>
                `;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error processing your request. Please try again later.');
        });
}