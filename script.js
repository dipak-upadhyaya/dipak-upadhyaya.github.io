// Fetch the JSON file containing publications
fetch('data/publications.json')
    .then(response => {
        console.log('Fetching publications.json...');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Publications data fetched successfully:', data);
        const publicationsList = document.getElementById('publications-list');
        data.forEach(pub => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${pub.title}</strong><br>
                <em>${pub.authors}</em><br>
                <span>${pub.journal} (${pub.year})</span><br>
                ${pub.link ? `<a href="${pub.link}" target="_blank">Read More</a>` : ''}
            `;
            publicationsList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching publications:', error));
