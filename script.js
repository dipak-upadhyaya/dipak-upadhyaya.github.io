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
            const pubDiv = document.createElement('div');
            pubDiv.classList.add('publication');
            pubDiv.innerHTML = `
                <strong>${pub.title}</strong><br>
                <em>${pub.authors.replace('Upadhyaya, D. P.', '<strong>Upadhyaya, D. P.</strong>')}</em><br>
                <span>${pub.journal} (${pub.year})</span><br>
                ${pub.link ? `<a href="${pub.link}" target="_blank">Read More</a>` : ''}
            `;
            publicationsContainer.appendChild(pubDiv);
        });
    })
    .catch(error => console.error('Error fetching publications:', error));

// Visitor counter using localStorage
if (!localStorage.getItem("visitorCount")) {
    localStorage.setItem("visitorCount", 0);
}

let visitorCount = parseInt(localStorage.getItem("visitorCount")) + 1;
localStorage.setItem("visitorCount", visitorCount);
document.getElementById("visitor-count").innerText = visitorCount;
