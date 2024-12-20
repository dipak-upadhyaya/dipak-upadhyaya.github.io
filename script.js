// Fetch the JSON file containing publications
fetch('data/publications.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const publicationsContainer = document.getElementById('publications-container');
        data.forEach(pub => {
            const pubDiv = document.createElement('div');
            pubDiv.innerHTML = `
                <strong>${pub.title}</strong><br>
                <em>${pub.authors}</em><br>
                <span>${pub.journal} (${pub.year})</span><br>
                ${pub.link ? `<a href="${pub.link}" target="_blank">Read More</a>` : ''}
            `;
            publicationsContainer.appendChild(pubDiv);
        });
    })
    .catch(error => console.error('Error fetching publications:', error));
