fetch('data/publications.json')
    .then(response => response.json())
    .then(data => {
        const publicationsContainer = document.getElementById('publications-container');
        data.forEach(pub => {
            const div = document.createElement('div');
            div.classList.add('publication');
            div.innerHTML = `
                <strong>${pub.title}</strong><br>
                <em>${pub.authors}</em><br>
                <span>${pub.journal} (${pub.year})</span><br>
                ${pub.link ? `<a href="${pub.link}" target="_blank">Read More</a>` : ''}
            `;
            publicationsContainer.appendChild(div);
        });
    })
    .catch(error => console.error('Error fetching publications:', error));
