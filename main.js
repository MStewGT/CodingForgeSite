// Social links
const githubIcon = '<i class="fa-brands fa fa-github"></i>'
const pre_years = '<pre>Years Coding: </pre>'
const pre_langs = '<pre>Languages: </pre>'
const pre_ints = '<pre>Interests: </pre>'

// Retrieve content from JSON files and create cards with addCard()
function main() {
    const data = card_data;
    console.log(data);
    for (i=0; i<data.length; i++) {
        addCard(data[i]);
    }
}

// Adds card to list based on JSON
function addCard(user_info) {
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
    name.innerText = user_info.name;
    name.classList.add('name');
    var github = document.createElement('a');
    github.href = user_info.github;
    github.innerHTML = githubIcon;

    // Create info div as well as the picture and facts sections
    var info = document.createElement('div');
    info.classList.add('info');
    var img = document.createElement('img');
    img.src = user_info.pic;
    var facts = document.createElement('div');
    facts.classList.add('facts');
    var yspan = document.createElement('span');
    yspan.innerHTML = pre_years;
    var yp = document.createElement('p');
    yp.innerText = user_info.years;


    // Arrange elements
    title.appendChild(name);
    title.appendChild(github);
    content.appendChild(title);
    content.appendChild(info);
    yspan.appendChild(yp);
    facts.appendChild(yspan);
    info.appendChild(img);
    info.appendChild(facts)
    card.appendChild(content);

    list.appendChild(card);
}

main();