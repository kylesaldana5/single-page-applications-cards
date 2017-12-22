let createButton = document.getElementById("create");
let textArea = document.getElementById("textArea");
let newTextArea = document.getElementById("newTextArea");

// write an EL to target the create new card button
createButton.addEventListener("click", () => {
    createCard();
    textArea.value = "";
    
});

function createCard() {
    // create the elments
    let input = textArea.value;
    let newCard = document.createElement("div");
    let newCardText = document.createElement("p");
    let deleteButton = document.createElement("button");

    // create the attributes 
    newCard.classList.add("newCard");
    deleteButton.id = "delte-button";
    newCardText.classList.add("newCardText");
    deleteButton.innerHTML = "delete";

    // add to DOM
    newCard.appendChild(newCard);
    deleteButton.appendChild(deleteButton);
    newCardText.appendChild(newCardText);
    newCard.appendChild(deleteButton);
}

// create function to delete new card

function deleteNewCard(card) {
    newTextArea.removeChild(card);
};