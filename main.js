// Social links
const githubIcon = '<i class="fa-brands fa fa-github"></i>'

// Function to retrieve content from JSON files and create cards with addCard()
function getJSON() {
    // Get data from local JSON file
}

// Adds card to list based on JSON
function addCard(json) {
    // Create unordered list
    var list = document.getElementById('user_cards');

    // Create the list item aka card
    var card = document.createElement('li');

    // Create the main content div
    var content =  document.createElement('div');
    content.classList.add('card_content');

    // Create title/header div as well as the Name and social links
    var title = document.createElement('div');
    title.classList.add('title');
    var name = document.createElement('h2');
    name.innerText = json.name;
    var github = document.createElement('a');
    github.href = json.github;
    github.innerHTML = githubIcon;

    // Create info div as well as the picture and facts sections

    // Arrange elements
    title.appendChild(name);
    title.appendChild(github);
    content.appendChild(title);
    content.appendChild(info);
    card.appendChild(content);

    list.appendChild(card);
}