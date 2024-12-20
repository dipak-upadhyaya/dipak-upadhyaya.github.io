// Fetch and display publications
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
            const li = document.createElement('li');
            const boldedAuthors = pub.authors.replace(/Upadhyaya, D\. P\./g, '<strong>Upadhyaya, D. P.</strong>'); // Bold the name
            li.innerHTML = `
                <p><strong>${pub.title}</strong></p>
                <p><em>${boldedAuthors}</em></p>
                <p>${pub.journal} (${pub.year})</p>
                ${pub.link ? `<p><a href="${pub.link}" target="_blank">Read More</a></p>` : ''}
            `;
            publicationsContainer.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching publications:', error));
