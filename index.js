const inputText = document.getElementById("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const createItem = (value) => {
    const divItem = document.createElement("div");
    divItem.classList.add("item");

    divItem.innerHTML = `
        <div>
            <img src="assets/icons/bullet.svg" alt="">
            <li>${value}</li>
        </div>
        <img class="delete-btn" src="assets/icons/Frame-3.svg" alt="Excluir item">
    `;

    // Adiciona evento de clique no ícone de exclusão
    divItem.querySelector(".delete-btn").addEventListener("click", () => {
        divItem.remove();
    });

    return divItem;
};

// Evento para adicionar um item na lista
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = inputText.value.trim();

    if (value === "") return; // Evita adicionar itens vazios

    const newItem = createItem(value);
    ul.appendChild(newItem);
    inputText.value = ""; // Limpa o input após adicionar
});
