const inputText = document.getElementById("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const alert = document.querySelector(".alert");
const closeAlert = document.querySelector("#closeAlert");

//função para criar o item da lista
const createItem = (value) => {

    //criando a div e colocando a classe item nela
    const divItem = document.createElement("div");
    divItem.classList.add("item");

    //estrutura do item com a inserção do valor dinamico
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

        //remove a classe hide que esta ocultando a notificação de exclusão
        alert.classList.remove("hide");
    });

    return divItem;
};

//função para quando clickar no X ocultar a notificação de exclusão
closeAlert.addEventListener("click", () =>{
    alert.classList.add("hide");
})

// Evento para adicionar um item na lista
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = inputText.value.trim();

    if (value === "") return; // Evita adicionar itens vazios

    //utiliza a função de criar o item passando como parametro o valor dinamico
    const newItem = createItem(value);

    //appendChild para adicionar como filho
    ul.appendChild(newItem);
    
    inputText.value = ""; // Limpa o input após adicionar
});
