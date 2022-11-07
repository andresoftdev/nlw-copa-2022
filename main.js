/*
    Função que cria os jogos tendo como retorno (return) o trecho de código entre as crases (``)!
    As crases (``) após o comando return permitem as quebras de linhas no código e a interpolação de strings ${}.
    A Função possui 3 parâmetros (variável que irá receber um valor).
*/
function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

/*
    Função que cria o Card tendo como retorno (return) o trecho de código entre as crases (``)!
    A Função possui 3 parâmetros (variáveis que irão receber um valor).
*/
let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

/*
    O método querySelector() retorna o PRIMEIRO elemento (seletor CSS) especificado entre parenteses que é
    encontrado dentro (innerHTML) de nossa página HTML (document).

    Obs.: Agora quem controla este trecho de código que estava entre as divs com id="cards" é o JavaScript,
    por isso a sua remoção da página index.html!!!

    Existe também a chamada para a função createCard() que recebe 3 argumentos (valores), sendo 1 deles a chamada
    para a função createGame().
*/
document.querySelector("#cards").innerHTML =
    createCard("24/11", "quinta", createGame("portugal", "13:00", "ghana") +
    createGame("brazil", "16:00", "serbia")) +
    createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland") + 
    createGame("portugal", "16:00", "uruguay")) +
    createCard("02/12", "sexta", createGame("south korea", "12:00", "portugal") +
    createGame("cameroon", "16:00", "brazil"))