let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#newbtn");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;   // playerX playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        // box.innerText = "abc";

        if(turnO){
            box.innerText = "O";
            turnO = false;

        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBtns = () =>{
    for (let box of boxes){
        box.disabled =true;
    }
};

const enablebtns = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBtns();
};

const checkWinner = () =>{
    for(let patterns of winPatterns){
        // console.log(boxes[patterns[0]].innerText, boxes[patterns[1]].innerText, boxes[patterns[2]].innerText);
        
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("Winnere 🤩", pos1Val);
                // alert("winner 🤩", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () =>{
    turnO = true;
    enablebtns();
    msgCont.classList.add("hide");
}

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
