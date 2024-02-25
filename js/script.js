let changeBoard = () => {
    let pg1 = document.getElementById("playground1");
    pg1.style.display = "none";


    let pg2 = document.getElementById("playground2");
    pg2.style.display = "block";

}

let change = () => { setTimeout(changeBoard, 4000); }
change();

//accesing array of all choice buttons
let buttons = document.querySelectorAll(".choice-buttons");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonId = button.getAttribute("id");
        startGame(buttonId);
    });
})

// starting game
let startGame = (choiceId) => {
    let userChoiceId = choiceId;
    changeHandSign("user", userChoiceId);

    let compChoiceId = computerChoice();
    changeHandSign("computer", compChoiceId);

    // also update score
    updateScore(userChoiceId, compChoiceId);
}

//generate computer choice
let computerChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * 3);  // generate random indexes btween 0-2
    return options[randomIndex];
}

// change hands sign
let changeHandSign = (player, choice) => {
    if (player == "user") {
        if (choice == "rock") {
            let div = document.getElementById("userSign");
            div.style.backgroundImage = "url('../images/fist.png')";
        }
        else if (choice == "paper") {
            let div = document.getElementById("userSign");
            div.style.backgroundImage = "url('../images/hello.png')";
        }
        else {
            let div = document.getElementById("userSign");
            div.style.backgroundImage = "url('../images/peace-symbol.png')";
        }
    }
    else {
        if (choice == "rock") {
            let div = document.getElementById("computerSign");
            div.style.backgroundImage = "url('../images/fist.png')";
        }
        else if (choice == "paper") {
            let div = document.getElementById("computerSign");
            div.style.backgroundImage = "url('../images/hello.png')";
        }
        else {
            let div = document.getElementById("computerSign");
            div.style.backgroundImage = "url('../images/peace-symbol.png')";
        }
    }

}

// change Score
let updateScore = (user, comp) => {
    let compScore = document.getElementById("compScore");
    let x = parseInt(compScore.innerText);

    let userScore = document.getElementById("userScore");
    let y = parseInt(userScore.innerText);

    let showChance = document.getElementById("show-chance");

    if (user == "rock" && comp == "paper" || user == "paper" && comp == "scissor" || user == "scissor" && comp == "rock") {
        x++;
        compScore.innerText = x;
        showChance.innerText = "Computer Won 🎉";
    }
    if (user == "rock" && comp == "scissor" || user == "paper" && comp == "rock" || user == "scissor" && comp == "paper") {

        y++;
        userScore.innerText = y;
        showChance.innerText = "You Won 🎉";
    }
    if (user == comp) {
        showChance.innerText = "Draw 🥹";
    }
    shoot();
}

// reset game
let resetBtn = document.getElementById("Reset");
resetBtn.addEventListener("click", () => {
    let compScore = document.getElementById("compScore");
    let userScore = document.getElementById("userScore");
    let showChance = document.getElementById("show-chance");

    userScore.innerText = "0";
    compScore.innerText = "0";
    showChance.innerText = "Ready to Shoot🤞"
})

// call shoot after every chance

let shoot = () => {
    setTimeout(shootText, 2000);
}

let shootText = () => {
    let showChance = document.getElementById("show-chance");
    showChance.innerText = "Ready to Shoot again🤞"
}