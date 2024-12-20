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
            pubDiv.className = 'publication';

            pubDiv.innerHTML = `
                <h3>${pub.title}</h3>
                <p class="authors">${pub.authors}</p>
                <p>${pub.journal} (${pub.year})</p>
                ${pub.link ? `<a href="${pub.link}" target="_blank">Read More</a>` : ''}
            `;
            publicationsContainer.appendChild(pubDiv);
        });
    })
    .catch(error => console.error('Error fetching publications:', error));
