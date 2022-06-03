let userTitle = document.getElementById("reviewTitle");
let userComment = document.getElementById("reviewText");
let username = document.getElementById("reviewName");
let reviewContainer = document.getElementById("reviewsRow");

document.getElementById("reviewButton").addEventListener("click", function(event){
    event.preventDefault();

    let container = document.createElement("div");
    container.setAttribute("class", "col-lg-4 col-md-6 py-3");

    let cardHeader = document.createElement("div");
    cardHeader.setAttribute("class", "card h-100");

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let cardTitle = document.createElement("h4");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = `${userTitle.value}`;

    let cardBlockquote = document.createElement("blockquote");
    cardBlockquote.setAttribute("class", "blockquote mb-0");

    let cardParagraph = document.createElement("p");
    console.log(userComment.value);
    cardParagraph.textContent = `${userComment.value}`;

    let cardFooter = document.createElement("footer");
    cardFooter.setAttribute("class", "text-end blockquote-footer");
    cardFooter.innerHTML = `<i>${username.value === "" ? "Anonymous" : username.value}</i>`;

    cardBlockquote.appendChild(cardParagraph);
    cardBlockquote.appendChild(cardFooter);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardBlockquote);
    cardHeader.appendChild(cardBody);
    container.appendChild(cardHeader);

    reviewContainer.appendChild(container);
});