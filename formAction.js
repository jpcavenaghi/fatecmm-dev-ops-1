const emailInput = document.getElementById("email");
const passInput = document.getElementById("senha");
const submitInput = document.getElementById("submit");

const user = {
    nome: "joao@email.com",
    senha: "12345"
}


submitInput.addEventListener("click", () => {
    if (emailInput.value == user.nome && passInput.value == user.senha) {
        alert("Logado com Sucesso")
    } else {
        alert("Email ou Senha Incorretos")
    }
})
