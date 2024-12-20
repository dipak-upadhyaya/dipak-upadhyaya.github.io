fetch('data/publications.json')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('publications-list');
        data.forEach(pub => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${pub.link}" target="_blank">${pub.title}</a>`;
            list.appendChild(li);
        });
    });
