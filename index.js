let randomNumber1 = Math.floor(Math.random()*6);
let randomNumber2 = Math.floor(Math.random()*6);
let diceRoll = new Audio("diceRoll.mp3");
diceRoll.play();
btn.setAttribute("onclick", "location.reload();");
let result = new Audio("result.mp3");
switch(randomNumber1){
    case 0:
        dice1.setAttribute("src", "images/dice1.png");
        break;
    case 1:
        dice1.setAttribute("src", "images/dice2.png");
        break;
    case 2:
        dice1.setAttribute("src", "images/dice3.png");
        break;
    case 3:
        dice1.setAttribute("src", "images/dice4.png");
        break;
    case 4:
        dice1.setAttribute("src", "images/dice5.png");
        break;
    case 5:
        dice1.setAttribute("src", "images/dice6.png");
        break;
    default:
        break;
}
switch(randomNumber2){
    case 0:
        dice2.setAttribute("src", "images/dice1.png");
        break;
    case 1:
        dice2.setAttribute("src", "images/dice2.png");
        break;
    case 2:
        dice2.setAttribute("src", "images/dice3.png");
        break;
    case 3:
        dice2.setAttribute("src", "images/dice4.png");
        break;
    case 4:
        dice2.setAttribute("src", "images/dice5.png");
        break;
    case 5:
        dice2.setAttribute("src", "images/dice6.png");
        break;
    default:
        break;
}

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Won!";
    result.play();
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerText = "Player 2 Won!";
    result.play();
}
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerText = "It's a Draw!";
    result.play();
}


