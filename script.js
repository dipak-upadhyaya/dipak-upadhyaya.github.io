fetch('data/publications.json')
    .then(response => response.json())
    .then(data => {
        console.log(data); // or dynamically populate the HTML
    });
