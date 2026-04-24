const publicationsContainer = document.getElementById('publications-container');

fetch('data/publications.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    })
    .then((data) => {
        publicationsContainer.innerHTML = '';

        data.forEach((publication) => {
            const card = document.createElement('article');
            card.className = 'publication-card';
            card.innerHTML = `
                <h3 class="publication-title">${publication.title}</h3>
                <p class="publication-authors"><strong>Authors:</strong> ${publication.authors}</p>
                <p class="publication-journal"><strong>Venue:</strong> ${publication.link ? `<a class="journal-link" href="${publication.link}" target="_blank" rel="noreferrer">${publication.journal}</a>` : publication.journal} (${publication.year})</p>
                ${publication.link ? `<a class="publication-link" href="${publication.link}" target="_blank" rel="noreferrer">Journal / Download</a>` : ''}
            `;
            publicationsContainer.appendChild(card);
        });
    })
    .catch((error) => {
        if (publicationsContainer) {
            publicationsContainer.innerHTML = '<p>Unable to load publications right now.</p>';
        }

        console.error('Error fetching publications:', error);
    });
